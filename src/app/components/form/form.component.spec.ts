import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from "@angular/common";

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  const routes: Routes = [
    { path: 'form', component: FormComponent },
  ]

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormComponent,
      ],
      imports: [
        RouterModule.forRoot(routes),
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
