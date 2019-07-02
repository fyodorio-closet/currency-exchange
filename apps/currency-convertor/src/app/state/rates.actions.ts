import { Action } from '@ngrx/store';
import { RatesSet } from '../models/rates-set.model';

export enum RatesActionTypes {
  LoadRates = '[Rates] Load Rates',
  RatesLoaded = '[Rates] Rates Loaded',
  RatesLoadError = '[Rates] Rates Load Error'
}

export class LoadRates implements Action {
  readonly type = RatesActionTypes.LoadRates;
}

export class RatesLoadError implements Action {
  readonly type = RatesActionTypes.RatesLoadError;
  constructor(public payload: any) {}
}

export class RatesLoaded implements Action {
  readonly type = RatesActionTypes.RatesLoaded;
  constructor(public payload: RatesSet) {}
}

export type RatesAction = LoadRates | RatesLoaded | RatesLoadError;
