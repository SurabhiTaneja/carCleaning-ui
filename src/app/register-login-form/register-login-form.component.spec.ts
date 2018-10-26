import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLoginFormComponent } from './register-login-form.component';

describe('RegisterLoginFormComponent', () => {
  let component: RegisterLoginFormComponent;
  let fixture: ComponentFixture<RegisterLoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterLoginFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
