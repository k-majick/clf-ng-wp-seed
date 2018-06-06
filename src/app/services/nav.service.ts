import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ENDPOINT_EN, ENDPOINT_PL } from '../app.settings';
import Nav from './Nav';

@Injectable()
export class NavService {

  private navBase = ENDPOINT_PL + 'wp-api-menus/v2/menus/';

  constructor(
    private http: HttpClient,
  ) { }

  getNav(menuID: string): Observable<Nav[]> {
    return this.http
      .get(this.navBase + menuID)
      .pipe(
        map(res => <Nav[]>res),
        catchError(this.handleError),
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return Observable.throw(error.message || 'Server error');
  }
}
