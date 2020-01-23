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
    private readonly actions$: Actions,
    private readonly authService: AuthenticationService,
    private readonly loadingService: LoadingService,
    private readonly router: Router,
  ) {
  }

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

  loginSuccess$: Observable<User> = createEffect(() => this.actions$.pipe(
    ofType(loginSuccess),
    tap((user) => {
      localStorage.setItem('token', user.fakeToken);
      this.router.navigate(['courses']);
    })
  ), {dispatch: false});

  loginFailure$: Observable<any> = createEffect(() => this.actions$.pipe(
    ofType(loginFailure),
    tap((user) => {
      localStorage.setItem('token', '');
    })
  ), {dispatch: false});

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(logout),
    tap(() => {
      localStorage.setItem('token', '');
      this.authService.logout();
      this.router.navigate(['login']);
    })
  ), {dispatch: false});

}
