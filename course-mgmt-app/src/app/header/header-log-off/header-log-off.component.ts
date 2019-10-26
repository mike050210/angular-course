import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header-log-off',
  templateUrl: './header-log-off.component.html',
  styleUrls: ['./header-log-off.component.css']
})
export class HeaderLogOffComponent implements OnInit {

  private isLoggedIn = false;

  constructor(private validateLoginService: AuthenticationService) {
  }

  ngOnInit() {
    this.isLoggedIn = this.validateLoginService.isUserAlreadyLoggedin();
  }

}
