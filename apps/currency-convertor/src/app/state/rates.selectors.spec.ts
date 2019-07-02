import { Entity, RatesState } from './rates.reducer';
import { ratesQuery } from './rates.selectors';

describe('Rates Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getRatesId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createRates = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      rates: {
        list: [
          createRates('PRODUCT-AAA'),
          createRates('PRODUCT-BBB'),
          createRates('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Rates Selectors', () => {
    it('getAllRates() should return the list of Rates', () => {
      const results = ratesQuery.getAllRates(storeState);
      const selId = getRatesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedRates() should return the selected Entity', () => {
      const result = ratesQuery.getSelectedRates(storeState);
      const selId = getRatesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = ratesQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = ratesQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
