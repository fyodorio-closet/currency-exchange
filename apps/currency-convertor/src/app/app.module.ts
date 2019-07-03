import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ratesReducer } from './state/rates.reducer';
import { RatesEffects } from './state/rates.effects';
import { DataFetcherService } from './data-fetcher/data-fetcher.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment.prod';
import {
  MatButtonModule,
  MatIconModule,
  MatSelectModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule, MatNativeDateModule, MatTableModule
} from '@angular/material';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ state: ratesReducer }),
    EffectsModule.forRoot([RatesEffects]),
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    StoreDevtoolsModule.instrument({
      name: 'NgRx Currency Convertor App',
      logOnly: environment.production,
    }),
  ],
  providers: [DataFetcherService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
