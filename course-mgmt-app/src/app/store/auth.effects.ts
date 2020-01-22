import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {login, loginFailure, loginSuccess, logout} from './auth.actions';
import {catchError, finalize, map, switchMap, tap} from 'rxjs/operators';
import {LoadingService} from '../services/loading.service';
import {User} from '../models/user-login.model';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthenticationService,
    private loadingService: LoadingService,
    private router: Router,
  ) {
  }

  @Effect()
  loginUser$ = createEffect(
    () => this.actions$.pipe(
      ofType(login),
      switchMap(
        action => {
          this.loadingService.startLoading();
          return this.authService.validateAndRetrieveUser(action.login, action.password).pipe(
            finalize(() => this.loadingService.finishLoading()),
            map(user => loginSuccess(user)),
            catchError(err => of(loginFailure())));
        }
      )
    )
  );

  @Effect({dispatch: false})
  loginSuccess: Observable<User> = this.actions$.pipe(
    ofType(loginSuccess),
    tap((user) => {
      localStorage.setItem('token', user.fakeToken);
      localStorage.setItem('username', user.name.firstName + ' ' + user.name.lastName);
      this.router.navigate(['courses']);
    })
  );

  @Effect({dispatch: false})
  loginFailure: Observable<any> = this.actions$.pipe(
    ofType(loginFailure),
    tap((user) => {
      localStorage.setItem('token', '');
    })
  );

  @Effect({dispatch: false})
  logout = this.actions$.pipe(
    ofType(logout),
    tap(() => {
      localStorage.setItem('token', '');
      this.authService.logout();
      this.router.navigate(['login']);
    })
  );

}
