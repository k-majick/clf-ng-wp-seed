import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { PostsService } from './posts.service';

describe('PostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
            deps: [HttpClient],
          },
        }),
      ],
      providers: [
        PostsService
      ]
    });
  });

  it('should be created', inject([PostsService], (service: PostsService) => {
    expect(service).toBeTruthy();
  }));
});
