import {Component} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {combineLatest} from 'rxjs';
import {LoadingService} from '../services/loading.service';
import {finalize} from 'rxjs/operators';

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
  loginError: boolean;

  constructor(private readonly authenticationService: AuthenticationService,
              private readonly loadingService: LoadingService,
              private readonly router: Router) {
    this.emailLabel = 'E-Mail:';
    this.passwordLabel = 'Password:';
  }

  validateAndRedirect() {
    this.loadingService.startLoading();
    this.authenticationService.validateAndRetrieveUser(this.login, this.password)
      .pipe(finalize(() => this.loadingService.finishLoading()))
      .subscribe(user => {
          if (user) {
            localStorage.setItem('username', user.name.firstName + ' ' + user.name.lastName);
            localStorage.setItem('token', user.fakeToken);
            this.loginError = false;
            this.router.navigate(['courses']);
          }
        },
        err => {
          this.login = '';
          this.password = '';
          this.loginError = true;
        });
  }
}
