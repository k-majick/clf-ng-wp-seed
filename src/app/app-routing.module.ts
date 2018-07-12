import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  PageSingleComponent,
  PostListComponent,
  PostSingleComponent,
  FormComponent,
  FormUserComponent,
  FormMessageComponent,
  FormSummaryComponent,
} from './components';

export const routes: Routes = [
  {
    path: 'home',
    component: PostListComponent,
    pathMatch: 'full',
  },
  {
    path: 'form', component: FormComponent,
    children: [
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      { path: 'user', component: FormUserComponent },
      { path: 'message', component: FormMessageComponent },
      { path: 'summary', component: FormSummaryComponent },
    ],
  },
  {
    path: 'heroes',
    component: PostListComponent,
    pathMatch: 'full',
  },
  {
    path: 'search',
    component: PostListComponent,
    pathMatch: 'full',
  },
  {
    path: 'test',
    component: PostListComponent,
    pathMatch: 'full',
  },
  {
    path: '',
    component: PostListComponent,
    pathMatch: 'full',
  },
  {
    path: 'post/:slug',
    component: PostSingleComponent,
  },
  {
    path: ':slug',
    component: PageSingleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
