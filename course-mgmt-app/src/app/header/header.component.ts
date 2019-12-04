import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public headerTitle = 'Video Course';

  username: string;
  isLoggedIn: boolean;

  constructor(private readonly router: Router, private readonly authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  logoutSession() {
    this.authService.logout();
    this.username = '';
    this.router.navigate(['login']);
  }
}
