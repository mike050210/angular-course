import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app.states';
import {Observable} from 'rxjs';
import {logout} from '../store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username$: Observable<String>;
  isLoggedIn$: Observable<boolean>;

  constructor(private readonly router: Router,
              private store: Store<AppState>) {
  }

  ngOnInit(): void {

    this.username$ = this.store.select('authState').pipe(map(store => {
      if (store.user) {
        return store.user.name.firstName + ' ' + store.user.name.lastName;
      } else {
        return '';
      }
    }));

    this.isLoggedIn$ = this.store.select('authState').pipe(map(store => store.isAuthenticated));
  }

  logoutSession() {
    this.store.dispatch(logout());
  }
}
