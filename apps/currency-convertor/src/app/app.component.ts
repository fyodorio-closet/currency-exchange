import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataFetcherService } from './data-fetcher/data-fetcher.service';
import { RatesState } from './models/rates.model';
import { LoadRates, LoadRatesByDate } from './state/rates.actions';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RatesSet } from './models/rates-set.model';
import { AppService } from './app.service';

@Component({
  selector: 'currency-convertor-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
  defaultDate: string;
  targetValue: number;
  dataSet: RatesSet;
  sourceValue = 1;

  constructor(private calculator: AppService, private store: Store<RatesState>, private dataFetcher: DataFetcherService, public fb: FormBuilder) {
    this.rates$ = this.store.pipe(select('state'));
    this.rates$.subscribe(data => {
      this.targetCurrencyList = this.objectKeys(data.ratesSet.rates).map(key => key);
      this.sourceCurrencyList = [
        ...this.targetCurrencyList,
        data.ratesSet.base
      ];
      this.dataSet = data.ratesSet;
      this.defaultDate = data.ratesSet.date;
      this.currencyForm.controls['sourceCurrency'].setValue(this.currentSourceCurrencyName, {onlySelf: true});
      this.currencyForm.controls['targetCurrency'].setValue(this.currentTargetCurrencyName, {onlySelf: true});
      this.currencyForm.controls['requestDate'].setValue(this.defaultDate, {onlySelf: true});
      this.currencyForm.controls['sourceValue'].setValue(this.sourceValue, {onlySelf: true});
      this.targetValue = this.currencyForm.controls['sourceValue'].value*data.ratesSet.rates[this.currencyForm.controls['targetCurrency'].value];
    });
  }

  ngOnInit() {
    this.store.dispatch(new LoadRates());

    // Process number change
    this.currencyForm.controls['sourceValue'].valueChanges.subscribe(change => {
      this.sourceValue = change;
      this.targetValue = change*this.dataSet.rates[this.currentTargetCurrencyName];
    });

    // Process source currency change
    this.currencyForm.controls['sourceCurrency'].valueChanges.subscribe(change => {
      this.dataSet = this.calculator.getRatesByAnotherBase(this.dataSet, change);
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
    this.currencyForm.controls['requestDate'].valueChanges.subscribe(change => {
      const oldValue = this.dataSet.date;
      const newValue = change;
      if (newValue && newValue !== oldValue) this.store.dispatch(new LoadRatesByDate(
        {
          ...this.dataSet,
          date: newValue,
          base: this.currentSourceCurrencyName
        }
      ));
    });
  }

  swapCurrencies() {
    this.currencyForm.controls['sourceCurrency'].setValue(this.currentTargetCurrencyName);
  }
}
