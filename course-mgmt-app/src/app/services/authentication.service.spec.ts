import {TestBed} from '@angular/core/testing';

import {AuthenticationService} from './authentication.service';
import {User} from '../models/user-login.model';

describe('ValidateLoginService', () => {

  let authService: AuthenticationService;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    authService = TestBed.get(AuthenticationService);

    authService.users = [{
      id: 'mock@mock.com',
      password: 'mock123',
      firstName: 'User',
      lastName: 'lastName'
    }];
  });

  it('is created', () => {


    expect(authService).toBeTruthy();
  });

  it('is valid user', () => {
    const user: User = {
      id: 'mock@mock.com',
      password: 'mock123',
      firstName: null,
      lastName: null
    };
    expect(authService.validateUser(user)).toBeTruthy();
  });

  it('is invalid user', () => {
    const user: User = {
      id: 'mock@mock.com',
      password: '123mock',
      firstName: null,
      lastName: null
    };
    expect(authService.validateUser(user)).toBeFalsy();
  });

});
