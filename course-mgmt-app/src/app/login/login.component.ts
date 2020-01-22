import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {LoadingService} from '../services/loading.service';
import {Store} from '@ngrx/store';
import {login} from '../store/auth.actions';
import {AppState} from '../store/app.states';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailLabel: string;
  passwordLabel: string;
  login: string;
  password: string;
  loginError$: Observable<boolean>;

  constructor(private readonly loadingService: LoadingService,
              private readonly router: Router,
              private store: Store<AppState>) {
    this.emailLabel = 'E-Mail:';
    this.passwordLabel = 'Password:';
  }


  validateAndRedirect() {
    this.store.dispatch(login({
      login: this.login,
      password: this.password
    }));

    this.loginError$ = this.store.select('authState').pipe(map(state => state.errorMessage));
  }
}
