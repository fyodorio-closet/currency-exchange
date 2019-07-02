import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  RATES_FEATURE_KEY,
  initialState as ratesInitialState,
  ratesReducer
} from './state/rates.reducer';
import { RatesEffects } from './state/rates.effects';
import { RatesFacade } from './state/rates.facade';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forFeature(RATES_FEATURE_KEY, ratesReducer, {
      initialState: ratesInitialState
    }),
    EffectsModule.forFeature([RatesEffects])
  ],
  providers: [RatesFacade],
  bootstrap: [AppComponent]
})
export class AppModule {}
