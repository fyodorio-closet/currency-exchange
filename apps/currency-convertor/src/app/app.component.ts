import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataFetcherService } from './data-fetcher/data-fetcher.service';
import { RatesState } from './models/rates.model';
import { LoadRates } from './state/rates.actions';

@Component({
  selector: 'currency-convertor-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'currency-convertor';
  rates$: Observable<RatesState>;
  objectKeys = Object.keys;

  constructor(private store: Store<RatesState>, private dataFetcher: DataFetcherService) {
    this.rates$ = this.store.pipe(select('state'));
  }

  ngOnInit() {
    this.store.dispatch(new LoadRates());
  }
}
