import { Action } from '@ngrx/store';
import { RatesSet } from '../models/rates.model';

export enum RatesActionTypes {
  LoadRates = '[Rates] Load Rates',
  LoadRatesByDate = '[Rates] Load Rates by Date',
  RatesLoaded = '[Rates] Rates Loaded'
}

export class LoadRates implements Action {
  readonly type = RatesActionTypes.LoadRates;
}

export class LoadRatesByDate implements Action {
  readonly type = RatesActionTypes.LoadRatesByDate;
  constructor(public payload: RatesSet) {}
}

export class RatesLoaded implements Action {
  readonly type = RatesActionTypes.RatesLoaded;
  constructor(public payload: RatesSet) {}
}

export type RatesAction = LoadRates | LoadRatesByDate | RatesLoaded;
