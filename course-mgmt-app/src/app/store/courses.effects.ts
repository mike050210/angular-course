import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {LoadingService} from '../services/loading.service';
import {CoursesService} from '../services/courses.service';
import {catchError, debounceTime, distinctUntilChanged, filter, finalize, first, map, switchMap, tap} from 'rxjs/operators';
import {
  addCourse,
  addCourseSuccessful,
  courseError,
  deleteCourse,
  deleteCourseSuccessful,
  filterCourses,
  increaseCounter,
  loadCourses,
  loadCoursesSuccess,
  updateCourse,
  updateCourseSuccessful
} from './courses.actions';
import {Store} from '@ngrx/store';
import {AppState} from './app.states';
import {BehaviorSubject, combineLatest, Observable, of} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class CoursesEffects {

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService,
    private loadingService: LoadingService,
    private store: Store<AppState>,
    private router: Router
  ) {
  }

  @Effect({dispatch: true})
  courses$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadCourses),
      switchMap(
        () => {
          this.loadingService.startLoading();

          let countResults$: BehaviorSubject<number> = null;

          this.store.select('coursesState').pipe(map(state => state.countResults))
            .subscribe(count => {
              countResults$ = new BehaviorSubject(count);
            });

          const filter$: Observable<string> = this.store.select('coursesState').pipe(map(state => state.filter));

          return combineLatest(countResults$,
            filter$.pipe(debounceTime(300),
              distinctUntilChanged(),
              filter((filtering) => filtering.length === 0 || filtering.length >= 3)))
            .pipe(
              switchMap(([counter, filterValue]) => {
                this.loadingService.startLoading();
                return this.coursesService.getAllCourses(0, counter, filterValue)
                  .pipe(tap(() => this.loadingService.finishLoading()));
              }),
              map(courses => loadCoursesSuccess({courses: courses})),
              finalize(() => this.loadingService.finishLoading()),
              catchError(err => of(courseError()))
            );
        }
      )
    )
  );

  @Effect({dispatch: true})
  increaseCounter = createEffect(
    () => this.actions$.pipe(
      ofType(increaseCounter),
      map(() => loadCourses())
    )
  );

  @Effect({dispatch: true})
  filterCourses = createEffect(
    () => this.actions$.pipe(
      ofType(filterCourses),
      map(() => loadCourses())
    )
  );

  @Effect({dispatch: true})
  addCourse = createEffect(
    () => this.actions$.pipe(
      ofType(addCourse),
      switchMap(
        action => {
          this.loadingService.startLoading();
          return this.coursesService.createCourse(action.course).pipe(first(),
            finalize(() => this.loadingService.finishLoading()),
            map(() => addCourseSuccessful()),
            catchError(err => of(courseError())));
        }
      ),
      tap(() => this.router.navigate(['courses']))
    )
  );

  @Effect({dispatch: true})
  addCourseSuccessful = createEffect(
    () => this.actions$.pipe(
      ofType(addCourseSuccessful),
      map(() => loadCourses())
    )
  );

  @Effect({dispatch: true})
  updateCourse = createEffect(
    () => this.actions$.pipe(
      ofType(updateCourse),
      switchMap(
        action => {
          this.loadingService.startLoading();
          return this.coursesService.updateCourse(action.course).pipe(
            finalize(() => this.loadingService.finishLoading()),
            map(() => updateCourseSuccessful()),
            catchError(err => of(courseError())));
        }
      ),
      tap(() => this.router.navigate(['courses']))
    )
  );

  @Effect({dispatch: true})
  updateCourseSuccessful = createEffect(
    () => this.actions$.pipe(
      ofType(updateCourseSuccessful),
      map(() => loadCourses())
    )
  );

  @Effect({dispatch: true})
  deleteCourse = createEffect(
    () => this.actions$.pipe(
      ofType(deleteCourse),
      switchMap(
        action => {
          this.loadingService.startLoading();
          return this.coursesService.deleteCourse(action.courseId).pipe(first(),
            finalize(() => this.loadingService.finishLoading()),
            map(() => deleteCourseSuccessful()),
            catchError(err => of(courseError())));
        }
      ),
      tap(() => this.router.navigate(['courses']))
    )
  );

  @Effect({dispatch: false})
  courseError = this.actions$.pipe(
    ofType(courseError),
    tap(() => {
      this.router.navigate(['error']);
    })
  );

}
