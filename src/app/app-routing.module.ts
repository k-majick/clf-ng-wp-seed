import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  PageSingleComponent,
  PostListComponent,
  PostSingleComponent,
} from './components';

export const routes: Routes = [
  {
    path: 'home',
    component: PostListComponent,
    pathMatch: 'full',
  },
  {
    path: 'form', component: PostListComponent,
    children: [
      { path: '', redirectTo: 'personal', pathMatch: 'full' },
      { path: 'personal', component: PostListComponent },
      { path: 'message', component: PostListComponent },
      { path: 'summary', component: PostListComponent },
    ],
  },
  {
    path: 'heroes',
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
