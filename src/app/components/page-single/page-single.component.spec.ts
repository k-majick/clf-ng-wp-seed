import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { PageSingleComponent } from './page-single.component';

describe('PageSingleComponent', () => {
  let component: PageSingleComponent;
  let fixture: ComponentFixture<PageSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PageSingleComponent
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
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSingleComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
