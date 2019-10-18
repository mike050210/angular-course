import { Component, OnInit } from '@angular/core';
import { ValidateLoginService } from '../services/validate-login.service';
import { UserLogin } from '../models/user-login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailLabel: string;
  passwordLabel: string;

  loginError: boolean;

  user: UserLogin;
  email: string;
  password: string;

  constructor(private validateLoginService: ValidateLoginService, private router: Router) {
    this.emailLabel = 'E-Mail:';
    this.passwordLabel = 'Password:';
    this.user = {email: '', password: '', firstName: '', lastName: ''};
  }

  ngOnInit() {
  }

  validateAndRedirect() {

    const isValid = this.validateLoginService.validateUser(this.user);
    this.user = {email: '', password: '', firstName: '', lastName: ''};
    if (isValid) {
      this.loginError = false;
      this.router.navigate(['home']);
    } else {
      this.loginError = true;
    }

  }
}
