import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  backendURL: string;
  httpOptions: any;

  constructor(private http: HttpClient) {
    this.backendURL = environment.BACKEND_URL;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'X-API-Key': 'true',
        api_key: environment.BACKEND_API_KEY
      })
    };
  }

  getJobs(siteIds: Array<string>, title: string, location: string, skip: number, limit: number): Observable<any> {
    const body = {
      siteIds,
      title: title.trim(),
      location,
      options: {
        remote: false
      },
      skip,
      limit
    };
    return this.http.post<Observable<any>>(`${this.backendURL}/jobs`, body, this.httpOptions);
  }

  getJobsCount(siteIds: Array<string>, title: string, location: string): Observable<any> {
    const body = {
      siteIds,
      title: title.trim(),
      location,
      options: {
        remote: false
      }
    };
    return this.http.post<Observable<any>>(`${this.backendURL}/count`, body, this.httpOptions);
  }

  getScrapeProgress(siteIds: Array<string>, title: string, location: string): Observable<any> {
    const body = {
      siteIds,
      title: title.trim(),
      location,
      options: {
        remote: false
      }
    };
    return this.http.post<Observable<any>>(`${this.backendURL}/scrape-progress`, body, this.httpOptions);
  }

  getSearchTask(siteIds: Array<string>, title: string, location: string, skip: number, limit: number): Observable<any> {
    const body = {
      siteIds,
      title: title.trim(),
      location,
      options: {
        remote: false
      },
      skip,
      limit
    };
    return this.http.post<Observable<any>>(`${this.backendURL}/search-task-titles`, body, this.httpOptions);
  }
}