import { ErrorHandler, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

import { PATHSSERVICES, ENDPOINT_EN, ENDPOINT_PL } from '../app.settings';
import Post from './Post';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Injectable()
export class PostsService {

  private urlBaseEN = ENDPOINT_EN;
  private urlBasePL = ENDPOINT_PL;

  constructor(
    public translate: TranslateService,
    private http: HttpClient,
  ) { }

  public getPostsEN(page: any = 1): Observable<Post[]> {
    return this.http
      .get(this.urlBaseEN + PATHSSERVICES.posts.path + `?per_page=2&page=${page}&_embed`)
      .pipe(
        map((res) => <Post[]>res),
        catchError(this.handleError),
    );
  }

  public getPostsPL(page: any = 1): Observable<Post[]> {
    return this.http
      .get(this.urlBaseEN + PATHSSERVICES.posts.path + `?per_page=2&page=${page}&_embed`)
      .pipe(
        map((res) => <Post[]>res),
        catchError(this.handleError),
    );
  }

  public getPost(slug: any): Observable<Post> {
    return this.http
      .get(this.urlBaseEN + PATHSSERVICES.posts.path + `?slug=${slug}&_embed`)
      .pipe(
        map((res) => <Post[]>res),
        catchError(this.handleError),
    );
  }

  public getPage(slug: any): Observable<Post> {
    return this.http
      .get(this.urlBaseEN + PATHSSERVICES.pages.path + `?slug=${slug}&_embed`)
      .pipe(
        map((res) => <Post[]>res),
        catchError(this.handleError),
    );
  }

  public getPostThumbnail(id: number) {
    return this.http
      .get(this.urlBaseEN + PATHSSERVICES.media.path + id)
      .pipe(
        map((res) => <Post[]>res),
        catchError(this.handleError),
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return Observable.throw(error.message || 'Server error');
  }

}
