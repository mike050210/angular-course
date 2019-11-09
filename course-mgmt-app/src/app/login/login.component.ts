import {Component} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {User} from '../models/user-login.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailLabel: string;
  passwordLabel: string;

  loginError: boolean;

  user = <User>{};

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.emailLabel = 'E-Mail:';
    this.passwordLabel = 'Password:';
  }

  validateAndRedirect() {

    const isValid = this.authenticationService.validateUser(this.user);

    if (isValid) {
      this.loginError = false;
      this.router.navigate(['courses']);
    } else {
      this.user.id = '';
      this.user.password = '';
      this.loginError = true;
    }

  }
}
