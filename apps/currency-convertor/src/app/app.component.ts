import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataFetcherService } from './data-fetcher/data-fetcher.service';
import { RatesState } from './models/rates.model';
import { LoadRates } from './state/rates.actions';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RatesSet } from './models/rates-set.model';

@Component({
  selector: 'currency-convertor-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'currency-convertor';
  rates$: Observable<RatesState>;
  objectKeys = Object.keys;
  currencyForm: FormGroup = this.fb.group({
    sourceCurrency: [''],
    targetCurrency: [''],
    sourceValue: [''],
    requestDate: ['']
  });
  sourceCurrencyList: string[];
  targetCurrencyList: string[];
  currentSourceCurrencyName = 'EUR';
  currentTargetCurrencyName = 'USD';
  isSubmitted = false;
  defaultDate: string;
  targetValue: number;
  dataSet: RatesSet;
  sourceValue = 1;

  constructor(private store: Store<RatesState>, private dataFetcher: DataFetcherService, public fb: FormBuilder) {
    this.rates$ = this.store.pipe(select('state'));
    this.rates$.subscribe(data => {
      this.targetCurrencyList = this.objectKeys(data.ratesSet.rates).map(key => key);
      this.sourceCurrencyList = [
        ...this.targetCurrencyList,
        data.ratesSet.base
      ];
      this.dataSet = data.ratesSet;
      this.currencyForm.controls['sourceCurrency'].setValue(this.currentSourceCurrencyName, {onlySelf: true});
      this.currencyForm.controls['targetCurrency'].setValue(this.currentTargetCurrencyName, {onlySelf: true});
      this.currencyForm.controls['requestDate'].setValue(this.defaultDate, {onlySelf: true});
      this.defaultDate = data.ratesSet.date;
      this.currencyForm.controls['sourceValue'].setValue(1, {onlySelf: true});
      this.targetValue = this.currencyForm.controls['sourceValue'].value*data.ratesSet.rates[this.currencyForm.controls['targetCurrency'].value];
    });
  }

  ngOnInit() {
    this.store.dispatch(new LoadRates());

    // Process number change
    this.currencyForm.controls['sourceValue'].valueChanges.subscribe(change => {
      //this.sourceValue = change;
      this.targetValue = change*this.dataSet.rates[this.currentTargetCurrencyName];
    });

    // Process source currency change
    this.currencyForm.controls['sourceCurrency'].valueChanges.subscribe(change => {
      this.dataSet = this.getRatesByAnotherBase(this.dataSet, change);
      // In target list remove new currency to avoid repetition
      this.targetCurrencyList = this.targetCurrencyList.filter(
        item => change !== item
      );
      // Check if currency is flipped and replace it
      if (this.currencyForm.controls['targetCurrency'].value === change) {
        this.targetCurrencyList.push(this.currentSourceCurrencyName);
        this.currencyForm.controls['targetCurrency'].setValue(this.currentSourceCurrencyName, {onlySelf: true})
        this.currentTargetCurrencyName = this.currentSourceCurrencyName;
      }
      // Reference current chosen currency in component
      this.currentSourceCurrencyName = change;
      // Change calculation if any
      this.targetValue = this.sourceValue*this.dataSet.rates[this.currencyForm.controls['targetCurrency'].value];
    });

    // Process target currency change
    this.currencyForm.controls['targetCurrency'].valueChanges.subscribe(change => {
      this.targetValue = this.sourceValue*this.dataSet.rates[this.currencyForm.controls['targetCurrency'].value];
      this.currentTargetCurrencyName = change;
    })

    // Process date change
  }

  changeRequestDate(e) {
    this.currencyForm.controls['requestDate'].setValue(e.target.value, {onlySelf: true})
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.currencyForm.valid) {
      return false;
    } else {
      console.log(JSON.stringify(this.currencyForm.value))
    }
  }

  swapCurrencies() {
    this.currencyForm.controls['sourceCurrency'].setValue(this.currentTargetCurrencyName);
  }

  getRatesByAnotherBase(rates: RatesSet, newBase: string): RatesSet {
    if (newBase === rates.base) return rates;
    // Isolate basic set of rates
    const setOfRates = JSON.parse(JSON.stringify(rates.rates));
    // Calculate rate of old base by new base for future pushing
    const rateOfOldBaseByNewBase = 1 / setOfRates[newBase];
    // Iterate through object with rates to recalculate by new base
    for (const key in setOfRates) {
      if (setOfRates.hasOwnProperty(key)) {
        setOfRates[key] = rates.rates[key] / rates.rates[newBase];
      }
    }
    // Push rate for old base by new base
    setOfRates[rates.base] = rateOfOldBaseByNewBase;
    // Remove old base from the list
    delete setOfRates[newBase];
    // Compile new response in the same format
    const newResponse = {
      base: newBase,
      date: rates.date,
      rates: JSON.parse(JSON.stringify(setOfRates))
    };
    return newResponse;
  }
}
