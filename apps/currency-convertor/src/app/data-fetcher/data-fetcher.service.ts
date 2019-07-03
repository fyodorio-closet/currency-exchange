import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { map, switchMap } from 'rxjs/operators';
import { RatesSet } from '../models/rates-set.model';

const API_URL = 'https://api.exchangeratesapi.io/'

@Injectable()
export class DataFetcherService {

  constructor(private http: HttpClient, private calculator: AppService) { }

  getData(): Observable<any> {
    return this.http.get(`${API_URL}latest`);
  }

  getDataByDate(date: string, base: string): Observable<any> {
    return this.http.get(`${API_URL}${date}`).pipe(
      map((rateSet: RatesSet) => this.calculator.getRatesByAnotherBase(rateSet, base))
    );
  }
}
