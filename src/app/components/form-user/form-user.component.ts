import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IAppStore } from '../../stores/app.store';
import { IUserProfile } from './form-user.model';
import { GENDERS, MESSAGES } from '../form/form.data';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  providers: [],
})
export class FormUserComponent implements OnInit {

  userForm: FormGroup;
  formValues$: Observable<IUserProfile[]>;
  validationMessages = MESSAGES;
  genderList: string[];

  constructor(
    private _store: Store<IAppStore>,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.formValues$ = this._store.select(state => state.user);
  }

  ngOnInit() {
    this.createForm();
    this.genderList = GENDERS;
    const formValues = sessionStorage.getItem('formUserValues');
    if (formValues) {
      this.applyFormValues(this.userForm, JSON.parse(formValues));
    }
    this.onChanges();
  }

  createForm() {
    this.userForm = this.fb.group({
      userFirstName: ['', [Validators.required, Validators.minLength(3)]],
      userLastName: ['', [Validators.required, Validators.minLength(3)]],
      userSex: ['', [Validators.required]],
      userEmail: ['', [Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    });
    this.userForm.setValue({
      userFirstName: 'Majick',
      userLastName: 'K-Majick',
      userSex: 'Man',
      userEmail: 'studio@cyberleaf.pl',
    });
  }

  onChanges(): void {
    this.userForm.valueChanges.subscribe((formUserValues) => {
      sessionStorage.setItem('formUserValues', JSON.stringify(formUserValues));
    });
    this.userForm.statusChanges.subscribe((formUserStatus) => {
      sessionStorage.setItem('formUserStatus', JSON.stringify(formUserStatus));
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

  next(userFirstName, userLastName, userSex, userEmail) {
    this._store.dispatch({
      type: 'UPDATE_USER',
      payload: <IUserProfile>{
        userFirstName: userFirstName,
        userLastName: userLastName,
        userSex: userSex,
        userEmail: userEmail,
      }
    });

    this.router.navigate(['/form/message']);
  }

}
