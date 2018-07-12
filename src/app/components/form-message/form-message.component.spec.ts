import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";

import { StoreModule } from '@ngrx/store';

import { FormMessageComponent } from './form-message.component';
import { formMessageReducer } from '../../reducers/form-message.reducer';

describe('FormMessageComponent', () => {
  let component: FormMessageComponent;
  let fixture: ComponentFixture<FormMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormMessageComponent,
      ],
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        StoreModule.forRoot({
          user: formMessageReducer
        }),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
