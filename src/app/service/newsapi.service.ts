import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsapiService {
  constructor(private _http: HttpClient) {}

  // Header API Url Call
  topHeadlineNews =
    'https://newsapi.org/v2/top-headlines?country=in&apiKey=1e422191574a4b6c9ba0e3565e3d60da';
  // Only Technology News
  technologyNews =
    'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=1e422191574a4b6c9ba0e3565e3d60da';

  technologyNewsOnly(): Observable<any>{
    return this._http.get(this.technologyNews); // geting data from URL header
  }

  topHeadline(): Observable<any> {
    return this._http.get(this.topHeadlineNews); // geting data from URL header
  }
}
