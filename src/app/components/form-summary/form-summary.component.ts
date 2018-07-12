import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppStore } from '../../stores/app.store';

@Component({
  selector: 'app-form-summary',
  templateUrl: 'form-summary.component.html',
})
export class FormSummaryComponent implements OnInit {

  mergedForm: any;
  storeValues$: any;

  constructor(
    private router: Router,
    private db: AngularFireDatabase,
    private _store: Store<IAppStore>,
  ) {
    this.storeValues$ = this._store.select(state => state.user);
  }

  ngOnInit() {

    // values merged from sessionStorage
    const formUserValues = JSON.parse(sessionStorage.getItem('formUserValues'));
    const formMsgValues = JSON.parse(sessionStorage.getItem('formMsgValues'));
    this.mergedForm = { ...formUserValues, ...formMsgValues };
    //console.log(this.mergedForm);
  }

  submit() {
    const { userFirstName, userCity, userSex, userEmail, userMessage } = this.mergedForm;
    const date = Date();
    const html = `
        <div>From: ${userFirstName}</div>
        <div>Email: <a href="mailto:${userEmail}">${userEmail}</a></div>
        <div>Date: ${date}</div>
        <div>Sex: ${userSex}</div>
        <div>Message: ${userMessage}</div>
      `;
    const formRequest = { date, html, userFirstName, userEmail, userSex, userMessage };
    // this.db.list('users').push(formRequest);
    this.destroyFormValues();
  }

  destroyFormValues() {
    sessionStorage.removeItem('formPersonalValues');
    sessionStorage.removeItem('formMessageValues');
  }

  prev() {
    this.router.navigate(['/form/message']);
  }

}
