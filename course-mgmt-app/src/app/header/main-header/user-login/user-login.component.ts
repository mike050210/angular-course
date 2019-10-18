import { Component, OnInit, Input } from '@angular/core';
import { ValidateLoginService } from 'src/app/services/validate-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  @Input() username: string;

  constructor(private validateLogin: ValidateLoginService) { }

  ngOnInit() {
    console.log('name: ' + this.validateLogin.getLoginUsername());
    this.username = this.validateLogin.getLoginUsername();
  }

}
