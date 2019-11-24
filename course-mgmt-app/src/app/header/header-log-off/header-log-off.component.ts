import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthenticationService} from 'src/app/services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header-log-off',
  templateUrl: './header-log-off.component.html',
  styleUrls: ['./header-log-off.component.css']
})
export class HeaderLogOffComponent {

  @Output()
  logout = new EventEmitter<String>();

  constructor() {
  }

  logoutSession() {
    this.logout.emit('logout');
  }

}
