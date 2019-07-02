import { RatesLoaded } from './rates.actions';
import {
  RatesState,
  Entity,
  initialState,
  ratesReducer
} from './rates.reducer';

describe('Rates Reducer', () => {
  const getRatesId = it => it['id'];
  let createRates;

  beforeEach(() => {
    createRates = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Rates actions ', () => {
    it('should return set the list of known Rates', () => {
      const ratess = [createRates('PRODUCT-AAA'), createRates('PRODUCT-zzz')];
      const action = new RatesLoaded(ratess);
      const result: RatesState = ratesReducer(initialState, action);
      const selId: string = getRatesId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = ratesReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
