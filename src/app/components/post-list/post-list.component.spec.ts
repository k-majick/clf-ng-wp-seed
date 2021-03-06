import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { PostListComponent } from './post-list.component';
import { ExcerptPipe } from '../../pipes/excerpt.pipe';
import { PostsService } from '../../services/posts.service';
import Post from '../../services/Post';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;
  let getPostsSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExcerptPipe,
        PostListComponent,
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
            deps: [HttpClient],
          },
        }),
      ],
      providers: [
        TranslateService,
        PostsService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;

  }));

  it('should load some posts', () => {
    expect(component).toBeTruthy();
  });

});
