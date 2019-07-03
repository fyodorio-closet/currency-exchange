import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppService } from '../app.service';
import { RatesSet } from '../models/rates.model';

const API_URL_BASE = 'https://api.exchangeratesapi.io/';
const API_URL = `${API_URL_BASE}latest`;
const API_MOCK_URL = 'https://api.myjson.com/bins/1dnd5n';


@Injectable()
export class DataFetcherService {

  constructor(private http: HttpClient, private calculator: AppService) { }

  getData(): Observable<any> {
    return this.http.get(API_MOCK_URL);
  }

  getDataByDate(action): Observable<any>{
    const date = action.payload.date;
    const base = action.payload.base;
    return this.http.get(`${API_URL_BASE}${date}`).pipe(
      map((rateSet: RatesSet) => this.calculator.getRatesByAnotherBase(rateSet, base))
    );
  }
}
