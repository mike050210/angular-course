import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';
import {RouterTestingModule} from '@angular/router/testing';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let testBedAuthService: AuthenticationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthenticationService],
      imports: [FormsModule, SharedModule, RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    testBedAuthService = TestBed.get(AuthenticationService);

    fixture.detectChanges();
  });

  afterEach(() => {
    testBedAuthService = null;
  });

  it('is created', () => {
    expect(component).toBeTruthy();
  });

  it('is valid authentication', () => {
    spyOn(testBedAuthService, 'validateUser').and.returnValue(true);

    component.validateAndRedirect();
    expect(component.loginError).toBeFalsy();
  });

  it('is invalid authentication', () => {
    spyOn(testBedAuthService, 'validateUser').and.returnValue(false);

    component.validateAndRedirect();
    expect(component.loginError).toBeTruthy();
  });
});
