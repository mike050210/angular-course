import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app.states';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private readonly router: Router, private store: Store<AppState>) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    this.store.select('authState').pipe(map(store => store.isAuthenticated)).subscribe((value) => {
      if (value === false) {
        this.router.navigateByUrl('login');
      }
    });


    return this.store.select('authState').pipe(map(store => store.isAuthenticated));
  }

}
