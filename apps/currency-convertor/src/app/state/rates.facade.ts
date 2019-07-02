import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { RatesPartialState } from './rates.reducer';
import { ratesQuery } from './rates.selectors';
import { LoadRates } from './rates.actions';

@Injectable()
export class RatesFacade {
  loaded$ = this.store.pipe(select(ratesQuery.getLoaded));
  allRates$ = this.store.pipe(select(ratesQuery.getAllRates));
  selectedRates$ = this.store.pipe(select(ratesQuery.getSelectedRates));

  constructor(private store: Store<RatesPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadRates());
  }
}
