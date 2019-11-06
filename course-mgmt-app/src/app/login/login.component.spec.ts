import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';
import {AuthenticationService} from '../services/authentication.service';
import {RouterTestingModule} from '@angular/router/testing';
import {CoursesComponent} from '../main/courses.component';
import {CoursesModule} from '../main/courses.module';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthenticationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthenticationService],
      imports: [
        CoursesModule,
        FormsModule,
        SharedModule,
        RouterTestingModule.withRoutes([{path: 'courses', component: CoursesComponent}])
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    authService = TestBed.get(AuthenticationService);

    fixture.detectChanges();
  });

  it('is created', () => {
    expect(component).toBeTruthy();
  });

  it('is valid authentication', () => {
    spyOn(authService, 'validateUser').and.returnValue(true);

    component.validateAndRedirect();
    expect(component.loginError).toBeFalsy();
  });

  it('is invalid authentication', () => {
    spyOn(authService, 'validateUser').and.returnValue(false);

    component.validateAndRedirect();
    expect(component.loginError).toBeTruthy();
  });
});
