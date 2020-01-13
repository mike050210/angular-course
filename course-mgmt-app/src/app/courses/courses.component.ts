import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Path} from '../models/paths.model';
import {Course} from '../models/course.model';
import {CoursesService} from '../services/courses.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, finalize, first, switchMap, tap} from 'rxjs/operators';
import {LoadingService} from '../services/loading.service';

@Component({
  selector: 'app-main',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CoursesComponent implements OnInit {
  filteredCourses$: Observable<Course[]>;
  filter$ = new BehaviorSubject<string>('');
  countResults$ = new BehaviorSubject<number>(5);
  paths: Path[] = [{name: 'Courses', href: ''}];
  loadMoreLabel = 'Load More';
  startIdxResult = 0;
  readonly step = 5;


  constructor(private httpClient: HttpClient,
              private readonly coursesService: CoursesService,
              private readonly loadingService: LoadingService,
              private readonly router: Router,
              private readonly cdRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    const username = localStorage.getItem('username');

    if (!username) {
      this.router.navigate(['login']);
    } else {
      this.filteredCourses$ = combineLatest(this.countResults$,
        this.filter$.pipe(debounceTime(300),
          distinctUntilChanged(),
          filter(() => this.filter$.value.length === 0 || this.filter$.value.length >= 3)))
        .pipe(switchMap(([counter, filterValue]) => {
          this.loadingService.startLoading();
          return this.retrieveCourses(counter, filterValue).pipe(tap(() => this.loadingService.finishLoading()));
        }), finalize(() => this.loadingService.finishLoading()));
    }
  }

  retrieveCourses(countResults: number, filterValue?: string): Observable<Course[]> {
    return this.coursesService.getAllCourses(this.startIdxResult, countResults, filterValue);
  }

  filterCourses(filter: string) {
    this.filter$.next(filter);
  }

  addNewCourse() {
    console.log('Adding a new course');
    this.router.navigate(['courses/new']);
  }

  loadMore() {
    console.log('Loading more courses');
    this.countResults$.pipe(first()).pipe(value => {
        this.loadingService.startLoading();
        return value;
      }
    ).subscribe((countResults) => {
      this.countResults$.next(countResults + this.step);
    });
  }

  editCourse(courseId: string) {
    this.router.navigate(['courses/', courseId]);
  }

  deleteCourse(courseId: string) {
    this.coursesService.deleteCourse(courseId).pipe(first()).pipe(value => {
        this.loadingService.startLoading();
        return value;
      }
    ).subscribe(() => {
      this.countResults$.next(this.countResults$.getValue());
    });
  }


}
