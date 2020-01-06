import {Injectable} from '@angular/core';
import {User} from '../models/user-login.model';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {Token} from '../models/token.model';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private readonly http: HttpClient) {
  }

  private loggedIn = new BehaviorSubject<boolean>(false);
  private readonly authUrlBase: string = 'http://localhost:3004/auth';


  public validateAndRetrieveUser(login: string, password: string): Observable<User> {

    return this.http.post<Token>(`${this.authUrlBase}/login`, {login, password})
      .pipe(switchMap(tkn => {
        return this.http.post<User>(`${this.authUrlBase}/userinfo`, {...tkn});
      })).pipe(user => {
        this.loggedIn.next(true);
        return user;
      });
  }


  public logout(): void {
    this.loggedIn.next(false);
    localStorage.removeItem('token');
    localStorage.removeItem('username');
  }

  public isAuthenticated(): Observable<boolean> {
    return this.loggedIn;
  }
}
