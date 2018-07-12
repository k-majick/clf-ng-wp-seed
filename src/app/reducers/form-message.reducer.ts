import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';

import { IAppStore } from '../stores/app.store';
import { IUserMessage } from '../components/form-message/form-message.model';

// action
const UPDATE_MSG = 'UPDATE_MSG';

export class UpdateMessageForm implements Action {
  readonly type = UPDATE_MSG;
  constructor(
    public payload: IUserMessage,
  ) { }
}

const initialState = {
  userMsg: 'Lorem Ipsum',
}

// reducer
export function formMessageReducer(state: IUserMessage[], action: UpdateMessageForm) {
  switch (action.type) {
    case UPDATE_MSG:
      return action.payload;
    default:
      return state;
  }
}
