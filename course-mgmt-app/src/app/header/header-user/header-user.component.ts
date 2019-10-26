import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent implements OnInit {

  @Input() username: string;

  constructor(private validateLogin: AuthenticationService) { }

  ngOnInit() {
    this.username = this.validateLogin.getLoginUsername();
  }

}
