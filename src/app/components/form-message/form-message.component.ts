import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppStore } from '../../stores/app.store';
import { IUserMessage } from './form-message.model';
import { GENDERS, MESSAGES } from '../form/form.data';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  providers: [],
})
export class FormMessageComponent implements OnInit {

  msgForm: FormGroup;
  formMsgValues$: Observable<IUserMessage[]>;
  validationMessages = MESSAGES;

  constructor(
    private _store: Store<IAppStore>,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.formMsgValues$ = this._store.select(state => state.message);
  }

  ngOnInit() {
    this.createForm();
    const formValues = sessionStorage.getItem('formMsgValues');
    if (formValues) {
      this.applyFormValues(this.msgForm, JSON.parse(formValues));
    }
    this.onChanges();
  }

  createForm() {
    this.msgForm = this.fb.group({
      userMsg: ['', [Validators.required, Validators.minLength(3)]],
    });
    this.msgForm.setValue({
      userMsg: 'Lorem ipsum',
    });
  }

  onChanges(): void {
    this.msgForm.valueChanges.subscribe((formMsgValues) => {
      sessionStorage.setItem('formMsgValues', JSON.stringify(formMsgValues));
    });
    this.msgForm.statusChanges.subscribe((formMsgStatus) => {
      sessionStorage.setItem('formMsgStatus', JSON.stringify(formMsgStatus));
    });
  }

  private applyFormValues(group: any, formValues: any) {
    Object.keys(formValues).forEach((key) => {
      const formControl = <FormControl>group.controls[key];
      if (formControl instanceof FormGroup) {
        this.applyFormValues(formControl, formValues[key]);
      } else {
        formControl.setValue(formValues[key]);
      }
    });
  }

  next(userMsg) {
    this._store.dispatch({
      type: 'UPDATE_MSG',
      payload: <IUserMessage>{
        userMsg: userMsg,
      }
    });
    this.router.navigate(['/form/summary']);

  }

  prev() {
    this.router.navigate(['/form/user']);
  }

}
