import {Injectable} from '@angular/core';
import {User} from '../models/user-login.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Token} from '../models/token.model';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private readonly http: HttpClient) {
  }

  private user = <User>{};
  private loggedIn = false;
  private readonly authUrlBase: string = 'http://localhost:3004/auth';


  public validateAndRetrieveUser(login: string, password: string): Observable<User> {

    return this.http.post<Token>(`${this.authUrlBase}/login`, {login, password})
      .pipe(switchMap(tkn => {
        return this.http.post<User>(`${this.authUrlBase}/userinfo`, {...tkn});
      }));
  }


  public logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }

  public getLoginUsername(): string {
    return this.user.name.firstName + ' ' + this.user.name.lastName;
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem('username');
  }
}
