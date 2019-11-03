import { Injectable } from '@angular/core';
import { User } from '../models/user-login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private user = <User>{};
  private loggedIn = false;

  users: User[] =
    [
      {
        id: 'a',
        password: 'a',
        firstName: 'Miguel',
        lastName: 'Osorio'
      },
      {
        id: 'admin@epam.com',
        password: 'admin',
        firstName: 'Miguel',
        lastName: 'Osorio'
      }
    ];


  public validateUser(userLogin: User): boolean {
    this.user =  this.users.find(user => user.id === userLogin.id && user.password === userLogin.password);
    this.loggedIn = !!this.user;
    return this.loggedIn;
  }

  public getLoginUsername(): string {
    return this.user.firstName + ' ' + this.user.lastName;
  }

  public isUserAlreadyLoggedIn(): boolean {
    return this.loggedIn;
  }
}
