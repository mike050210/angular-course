import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private isLoading = new BehaviorSubject(false);

  loadingStatus(): Observable<boolean> {
    return this.isLoading;
  }

  startLoading() {
    this.isLoading.next(true);
  }

  finishLoading() {
    this.isLoading.next(false);
  }
}
