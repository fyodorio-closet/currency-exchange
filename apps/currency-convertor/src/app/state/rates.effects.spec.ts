import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { RatesEffects } from './rates.effects';
import { LoadRates, RatesLoaded } from './rates.actions';

describe('RatesEffects', () => {
  let actions: Observable<any>;
  let effects: RatesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        RatesEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(RatesEffects);
  });

  describe('loadRates$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadRates() });
      expect(effects.loadRates$).toBeObservable(
        hot('-a-|', { a: new RatesLoaded([]) })
      );
    });
  });
});
