import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {LoadingService} from '../services/loading.service';
import {CoursesService} from '../services/courses.service';
import {catchError, debounceTime, distinctUntilChanged, filter, finalize, first, map, switchMap, tap, withLatestFrom} from 'rxjs/operators';
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
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class CoursesEffects {

  constructor(
    private readonly actions$: Actions,
    private readonly coursesService: CoursesService,
    private readonly loadingService: LoadingService,
    private readonly store: Store<AppState>,
    private readonly router: Router
  ) {
  }

  @Effect({dispatch: true})
  courses$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadCourses),
      withLatestFrom(this.store.select('coursesState')),
      switchMap(
        ([action, store]) => {
          this.loadingService.startLoading();
          const filter$: Observable<string> = this.store.select('coursesState').pipe(map(state => state.filter));

          return filter$.pipe(
            debounceTime(300),
            distinctUntilChanged(),
            filter(filtering => filtering.length === 0 || filtering.length >= 3),
            switchMap(filterValue => {
              this.loadingService.startLoading();
              return this.coursesService.getAllCourses(0, store.countResults, filterValue)
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

  increaseCounter = createEffect(() => createEffect(
    () => this.actions$.pipe(
      ofType(increaseCounter),
      map(() => loadCourses())
    )
  ));

  filterCourses = createEffect(() => createEffect(
    () => this.actions$.pipe(
      ofType(filterCourses),
      map(() => loadCourses())
    )
  ), {dispatch: false});

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

  addCourseSuccessful = createEffect(
    () => this.actions$.pipe(
      ofType(addCourseSuccessful),
      map(() => loadCourses())
    )
  );

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

  updateCourseSuccessful = createEffect(
    () => this.actions$.pipe(
      ofType(updateCourseSuccessful),
      map(() => loadCourses())
    )
  );

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

  deleteCourseSuccessful = createEffect(
    () => this.actions$.pipe(
      ofType(deleteCourseSuccessful),
      map(() => loadCourses())
    )
  );

  courseError = createEffect(() => this.actions$.pipe(
    ofType(courseError),
    tap(() => {
      this.router.navigate(['error']);
    })
  ), {dispatch: false});

}
