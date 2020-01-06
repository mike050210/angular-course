import {Component} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {combineLatest, timer} from 'rxjs';
import {LoadingService} from '../services/loading.service';

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
    combineLatest(this.authenticationService.validateAndRetrieveUser(this.login, this.password), timer(500)).pipe(value => {
      this.loadingService.startLoading();
      return value;
    }).subscribe(user => {
        if (user) {
          localStorage.setItem('username', user[0].name.firstName + ' ' + user[0].name.lastName);
          localStorage.setItem('token', user[0].fakeToken);
          this.loginError = false;
          this.router.navigate(['courses']);
        }
        this.loadingService.finishLoading();
      },
      err => {
        this.login = '';
        this.password = '';
        this.loginError = true;
      });
  }
}
