import { TestBed, async } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from "@angular/common";
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ExcerptPipe } from '../../pipes/excerpt.pipe';
import {
  AppComponent,
  FooterComponent,
  HeaderComponent,
  PageSingleComponent,
  PostListComponent,
  PostSingleComponent,
} from '../../components';
import { routes } from '../../app-routing.module';

describe('AppComponent', () => {

  let translate: TranslateService;

  const routes: Routes = [
    { path: 'home', component: PostListComponent },
  ]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FooterComponent,
        HeaderComponent,
        PageSingleComponent,
        PostListComponent,
        PostSingleComponent,
        ExcerptPipe,
      ],
      imports: [
        HttpClientModule,
        RouterModule.forRoot(routes),
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
        { provide: APP_BASE_HREF, useValue: '/' },
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
