import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { MockBackend } from '@angular/http/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { PostsService } from './posts.service';
import { PATHSSERVICES, ENDPOINT_EN, ENDPOINT_PL } from '../app.settings';

describe('PostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
            deps: [HttpClient],
          },
        }),
      ],
      providers: [
        PostsService,
      ]
    });
  });

  it('should be created', inject([PostsService], (postsService: PostsService) => {
    expect(postsService).toBeTruthy();
  }));

  it('should return an Observable<Post[]>',
    inject([HttpTestingController, PostsService],
      (httpMock: HttpTestingController, postsService: PostsService) => {
        postsService.getPostsEN().subscribe((res) => {
          expect(res.length).not.toBeLessThan(0);
        });

      }));

});
