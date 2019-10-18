import { Component, OnInit } from '@angular/core';
import { ValidateLoginService } from 'src/app/services/validate-login.service';

@Component({
  selector: 'app-log-off',
  templateUrl: './log-off.component.html',
  styleUrls: ['./log-off.component.css']
})
export class LogOffComponent implements OnInit {

  private isLoggedIn: boolean;
  constructor(private validateLoginService: ValidateLoginService) {
    this.isLoggedIn = false;
  }

  ngOnInit() {
    this.isLoggedIn = this.validateLoginService.isUserAlreadyLoggedin();
  }

}
