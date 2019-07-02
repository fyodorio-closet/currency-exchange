import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ratesReducer } from './state/rates.reducer';
import { RatesEffects } from './state/rates.effects';
import { DataFetcherService } from './data-fetcher/data-fetcher.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ state: ratesReducer }),
    EffectsModule.forRoot([RatesEffects]),
    HttpClientModule
  ],
  providers: [DataFetcherService],
  bootstrap: [AppComponent]
})
export class AppModule {}
