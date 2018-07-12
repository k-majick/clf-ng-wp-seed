import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';

import { IAppStore } from '../stores/app.store';
import { IUserProfile } from '../components/form-user/form-user.model';

// action
const UPDATE_USER = 'UPDATE_USER';

export class UpdateUserForm implements Action {
  readonly type = UPDATE_USER;
  constructor(
    public payload: IUserProfile,
  ) { }
}

const initialState = {
  userFirstName: 'Roman',
  userLastName: 'Kluska',
  userEmail: 'roman@email.com',
}

// reducer
export function formUserReducer(state: IUserProfile[], action: UpdateUserForm) {
  switch (action.type) {
    case UPDATE_USER:
      return action.payload;
    default:
      return state;
  }
}
