import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from "@angular/router/testing";

import { StoreModule } from '@ngrx/store';
import { AngularFireModule } from 'angularfire2';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ENVIRONMENT } from '../../app.settings';

import { FormSummaryComponent } from './form-summary.component';

describe('FormSummaryComponent', () => {
  let component: FormSummaryComponent;
  let fixture: ComponentFixture<FormSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormSummaryComponent,
      ],
      imports: [
        AngularFireModule.initializeApp(ENVIRONMENT.firebase),
        AngularFireDatabaseModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        StoreModule.forRoot({}),
      ],
      providers: [
        AngularFireDatabase,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
