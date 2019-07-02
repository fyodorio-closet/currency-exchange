import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { RatesPartialState } from './rates.reducer';
import {
  LoadRates,
  RatesLoaded,
  RatesLoadError,
  RatesActionTypes
} from './rates.actions';

@Injectable()
export class RatesEffects {
  @Effect() loadRates$ = this.dataPersistence.fetch(
    RatesActionTypes.LoadRates,
    {
      run: (action: LoadRates, state: RatesPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new RatesLoaded([]);
      },

      onError: (action: LoadRates, error) => {
        console.error('Error', error);
        return new RatesLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<RatesPartialState>
  ) {}
}
