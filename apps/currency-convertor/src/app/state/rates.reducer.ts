import { RatesAction, RatesActionTypes } from './rates.actions';
import { RatesState } from './rates.model';

const initialRatesState: RatesState = {
  ratesSet: {
    base: '',
    date: '',
    rates: {}
  }
};

export function ratesReducer(
  state = initialRatesState, action: RatesAction
): RatesState {
  switch (action.type) {
    case RatesActionTypes.RatesLoaded: {
      return {
        ...state,
        ratesSet: action.payload
      };
    }
    default: return state;
  }
}

