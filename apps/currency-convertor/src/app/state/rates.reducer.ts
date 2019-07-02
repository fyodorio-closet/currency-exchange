import { RatesAction, RatesActionTypes } from './rates.actions';

export const RATES_FEATURE_KEY = 'rates';

/**
 * Interface for the 'Rates' data used in
 *  - RatesState, and
 *  - ratesReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface RatesState {
  list: Entity[]; // list of Rates; analogous to a sql normalized table
  selectedId?: string | number; // which Rates record has been selected
  loaded: boolean; // has the Rates list been loaded
  error?: any; // last none error (if any)
}

export interface RatesPartialState {
  readonly [RATES_FEATURE_KEY]: RatesState;
}

export const initialState: RatesState = {
  list: [],
  loaded: false
};

export function ratesReducer(
  state: RatesState = initialState,
  action: RatesAction
): RatesState {
  switch (action.type) {
    case RatesActionTypes.RatesLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
