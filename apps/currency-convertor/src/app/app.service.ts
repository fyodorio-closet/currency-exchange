import { Injectable } from '@angular/core';
import { RatesSet } from './models/rates.model';

@Injectable()
export class AppService {
  public getRatesByAnotherBase(rates: RatesSet, newBase: string): RatesSet {
    if (newBase === rates.base) return rates;
    // Isolate basic set of rates
    const setOfRates = JSON.parse(JSON.stringify(rates.rates));
    // Calculate rate of old base by new base for future pushing
    const rateOfOldBaseByNewBase = 1 / setOfRates[newBase];
    // Iterate through object with rates to recalculate by new base
    for (const key in setOfRates) {
      if (setOfRates.hasOwnProperty(key)) {
        setOfRates[key] = rates.rates[key] / rates.rates[newBase];
      }
    }
    // Push rate for old base by new base
    setOfRates[rates.base] = rateOfOldBaseByNewBase;
    // Remove old base from the list
    delete setOfRates[newBase];
    // Compile new response in the same format
    const newResponse = {
      base: newBase,
      date: rates.date,
      rates: JSON.parse(JSON.stringify(setOfRates))
    };
    return newResponse;
  }
}
