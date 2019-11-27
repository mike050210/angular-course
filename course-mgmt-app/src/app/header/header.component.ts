import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public headerTitle = 'Video Course';

  username: string;
  isLoggedIn: boolean;

  constructor(private readonly router: Router) {
  }

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.isLoggedIn = !!this.username;
  }

  logoutSession() {
    localStorage.removeItem('username');
    this.username = '';
    this.isLoggedIn = false;
    this.router.navigate(['login']);
  }
}
