import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataFetcherService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('https://api.myjson.com/bins/1dnd5n');
  }
}
