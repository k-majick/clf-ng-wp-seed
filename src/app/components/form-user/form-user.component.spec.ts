import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";

import { StoreModule } from '@ngrx/store';

import { FormUserComponent } from './form-user.component';
import { formUserReducer } from '../../reducers/form-user.reducer';

describe('FormMessageComponent', () => {
  let component: FormUserComponent;
  let fixture: ComponentFixture<FormUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormUserComponent,
      ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        StoreModule.forRoot({
          user: formUserReducer
        }),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
