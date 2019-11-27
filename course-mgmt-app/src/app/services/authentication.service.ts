import {Injectable} from '@angular/core';
import {User} from '../models/user-login.model';
import {stringify} from 'querystring';

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
    this.user = this.users.find(user => user.id === userLogin.id && user.password === userLogin.password);
    if (this.user) {
      localStorage.setItem('username', this.user.firstName + ' ' + this.user.lastName);
      localStorage.setItem('user', JSON.stringify(this.user));
      this.loggedIn = true;
    }
    return this.loggedIn;
  }

  public logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('user');
    localStorage.removeItem('username');
  }

  public getLoginUsername(): string {
    return this.user.firstName + ' ' + this.user.lastName;
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }
}
