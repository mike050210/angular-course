import { Injectable } from '@angular/core';
import { UserLogin } from '../models/user-login.model';

@Injectable({
  providedIn: 'root'
})
export class ValidateLoginService {

  private loginUser: UserLogin;
  private isUserLogin: boolean;

  users: UserLogin[] =
    [
      {
        email: 'miguel@epam.com',
        password: 'miguel',
        firstName: 'Miguel',
        lastName: 'Osorio'
      },
      {
        email: 'admin@epam.com',
        password: 'admin',
        firstName: 'Miguel',
        lastName: 'Osorio'
      }
    ];


  constructor() {
    this.isUserLogin = false;
    this.loginUser = {email: '', password: '', firstName: '', lastName: ''};
  }

  public validateUser(userLogin: UserLogin): boolean {
    this.loginUser =  this.users.find(user => user.email === userLogin.email && user.password === userLogin.password);
    this.isUserLogin = !!this.loginUser;
    return this.isUserLogin;
  }

  public getLoginUsername(): string {
    return this.loginUser.firstName + ' ' + this.loginUser.lastName;
  }

  public isUserAlreadyLoggedin(): boolean {
    return this.isUserLogin;
  }
}
