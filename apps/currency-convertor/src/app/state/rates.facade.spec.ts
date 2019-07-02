import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { RatesEffects } from './rates.effects';
import { RatesFacade } from './rates.facade';

import { ratesQuery } from './rates.selectors';
import { LoadRates, RatesLoaded } from './rates.actions';
import {
  RatesState,
  Entity,
  initialState,
  ratesReducer
} from './rates.reducer';

interface TestSchema {
  rates: RatesState;
}

describe('RatesFacade', () => {
  let facade: RatesFacade;
  let store: Store<TestSchema>;
  let createRates;

  beforeEach(() => {
    createRates = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('rates', ratesReducer, { initialState }),
          EffectsModule.forFeature([RatesEffects])
        ],
        providers: [RatesFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(RatesFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allRates$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allRates$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `RatesLoaded` to manually submit list for state management
     */
    it('allRates$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allRates$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new RatesLoaded([createRates('AAA'), createRates('BBB')])
        );

        list = await readFirst(facade.allRates$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
