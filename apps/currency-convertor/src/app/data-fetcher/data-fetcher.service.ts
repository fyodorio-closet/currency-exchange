import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'https://api.exchangeratesapi.io/'

@Injectable()
export class DataFetcherService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get(`${API_URL}latest`);
  }

  getDataByDate(date: string): Observable<any> {
    return this.http.get(`${API_URL}${date}`);
  }
}
