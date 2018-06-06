import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { ENVIRONMENT } from './app.settings';
import { ExcerptPipe } from './pipes/excerpt.pipe';
import { GlobalErrorHandler } from './services/error-handler';

import {
  AppComponent,
  FooterComponent,
  HeaderComponent,
  PageSingleComponent,
  PostListComponent,
  PostSingleComponent,
} from './components';

import '../assets/scss/main.scss';
import { TestpPipe } from './pipes/testp.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExcerptPipe,
    FooterComponent,
    HeaderComponent,
    PageSingleComponent,
    PostListComponent,
    PostSingleComponent,
    TestpPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(ENVIRONMENT.firebase),
    AngularFireDatabaseModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, './assets/i18n/', '.json'),
        // useFactory: translateLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function translateLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
}
