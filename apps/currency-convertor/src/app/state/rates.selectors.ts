import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RATES_FEATURE_KEY, RatesState } from './rates.reducer';

// Lookup the 'Rates' feature state managed by NgRx
const getRatesState = createFeatureSelector<RatesState>(RATES_FEATURE_KEY);

const getLoaded = createSelector(
  getRatesState,
  (state: RatesState) => state.loaded
);
const getError = createSelector(
  getRatesState,
  (state: RatesState) => state.error
);

const getAllRates = createSelector(
  getRatesState,
  getLoaded,
  (state: RatesState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getRatesState,
  (state: RatesState) => state.selectedId
);
const getSelectedRates = createSelector(
  getAllRates,
  getSelectedId,
  (rates, id) => {
    const result = rates.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const ratesQuery = {
  getLoaded,
  getError,
  getAllRates,
  getSelectedRates
};
