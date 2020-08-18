import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient,
  ) { }

  getDashboardData(query?): Observable<any> {
    let baseUrl = `https://api.spacexdata.com/v3/launches?limit=10`;
    if (query.year) {
      baseUrl = `${baseUrl}&launch_year=${JSON.stringify(query.year)}`;
    }
    if (JSON.stringify(query.launch)) {
      baseUrl = `${baseUrl}&launch_success=${JSON.stringify(query.launch)}`;
    }

    if (JSON.stringify(query.landing)) {
      baseUrl = `${baseUrl}&land_success=${JSON.stringify(query.landing)}`;
    }
    return this.httpClient
      .get(baseUrl, { responseType: 'json' })
  }
}
