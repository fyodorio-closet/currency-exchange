import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataFetcherService } from './data-fetcher/data-fetcher.service';
import { RatesState } from './models/rates.model';
import { LoadRates } from './state/rates.actions';
import { FormBuilder, FormGroup } from '@angular/forms';

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
    targetValue: [''],
    requestDate: ['']
  });
  sourceCurrencyList: string[];
  targetCurrencyList: string[];
  defaultSourceCurrencyName = 'EUR';
  defaultTargetCurrencyName = 'USD';
  isSubmitted = false;
  defaultDate: string;

  constructor(private store: Store<RatesState>, private dataFetcher: DataFetcherService, public fb: FormBuilder) {
    this.rates$ = this.store.pipe(select('state'));
    this.rates$.subscribe(data => {
      this.targetCurrencyList = this.objectKeys(data.ratesSet.rates).map(key => key);
      this.sourceCurrencyList = [
        ...this.targetCurrencyList,
        data.ratesSet.base
      ];
      this.currencyForm.controls['sourceCurrency'].setValue(this.defaultSourceCurrencyName, {onlySelf: true});
      this.currencyForm.controls['targetCurrency'].setValue(this.defaultTargetCurrencyName, {onlySelf: true});
      this.currencyForm.controls['requestDate'].setValue(this.defaultDate, {onlySelf: true});
      this.defaultDate = data.ratesSet.date;
      this.currencyForm.controls['sourceValue'].setValue(1, {onlySelf: true});
      this.currencyForm.controls['targetValue'].setValue(this.currencyForm.controls['sourceValue'].value*data.ratesSet.rates[this.currencyForm.controls['targetCurrency'].value], {onlySelf: true});
    });
  }

  ngOnInit() {
    this.store.dispatch(new LoadRates());
  }

  changeSource(e) {
    // TODO: service request
    this.targetCurrencyList = this.targetCurrencyList.filter(
      item => e.target.value !== item
    );
    if (this.currencyForm.controls['targetCurrency'].value === e.target.value) {
      this.targetCurrencyList.push(this.defaultSourceCurrencyName);
      this.currencyForm.controls['targetCurrency'].setValue(this.defaultSourceCurrencyName, {onlySelf: true})
    }
    this.defaultSourceCurrencyName = e.target.value;
    this.currencyForm.controls['sourceCurrency'].setValue(e.target.value, {onlySelf: true})
  }

  changeTarget(e) {
    this.currencyForm.controls['targetCurrency'].setValue(e.target.value, {onlySelf: true})
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
}
