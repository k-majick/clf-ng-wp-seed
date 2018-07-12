import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { StoreModule } from '@ngrx/store';
import { formUserReducer } from './reducers/form-user.reducer';
import { formMessageReducer } from './reducers/form-message.reducer';

import { AppRoutingModule } from './app-routing.module';
import { ENVIRONMENT } from './app.settings';
import { ExcerptPipe } from './pipes';
import { GlobalErrorHandler } from './services/error-handler';

import {
  AppComponent,
  FooterComponent,
  FormComponent,
  FormUserComponent,
  FormMessageComponent,
  FormSummaryComponent,
  HeaderComponent,
  PageSingleComponent,
  PostListComponent,
  PostSingleComponent,
} from './components';

import '../assets/scss/main.scss';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FormComponent,
    FormUserComponent,
    FormMessageComponent,
    FormSummaryComponent,
    HeaderComponent,
    HeaderComponent,
    PageSingleComponent,
    PostListComponent,
    PostSingleComponent,
    ExcerptPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(ENVIRONMENT.firebase),
    AngularFireDatabaseModule,
    StoreModule.forRoot({
      user: formUserReducer,
      message: formMessageReducer,

    }),
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
