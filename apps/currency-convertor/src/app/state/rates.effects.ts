import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';

import {
  RatesLoaded,
  RatesActionTypes
} from './rates.actions';
import { DataFetcherService } from '../data-fetcher/data-fetcher.service';
import { switchMap } from 'rxjs/operators';
import { RatesSet } from '../models/rates-set.model';
import { of } from 'rxjs';

@Injectable()
export class RatesEffects {
  @Effect() loadRates$ = this.actions$.pipe(
      ofType(RatesActionTypes.LoadRates),
      switchMap(() => this.dataFetcher.getData()),
      switchMap((ratesSet: RatesSet) => of(new RatesLoaded(ratesSet)))
  );

  // @ts-ignore
  @Effect() loadRatesByDate$ = this.actions$.pipe(
    ofType(RatesActionTypes.LoadRatesByDate),
    switchMap((action) => this.dataFetcher.getDataByDate(action)),
    switchMap((ratesSet: RatesSet) => of(new RatesLoaded(ratesSet)))
  );

  constructor(
    private actions$: Actions,
    private dataFetcher: DataFetcherService
  ) {}
}
