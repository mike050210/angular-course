import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Path} from '../models/paths.model';
import {Course} from '../models/course.model';
import {CoursesService} from '../services/courses.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, combineLatest, Observable, timer} from 'rxjs';
import {debounceTime, distinctUntilChanged, first, switchMap} from 'rxjs/operators';
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
        this.filter$.pipe(debounceTime(300), distinctUntilChanged()))
        .pipe(switchMap(([counter, filter]) => {
          this.loadingService.startLoading();
          const courses = this.retrieveCourses(counter, filter);
          this.loadingService.finishLoading();
          return courses;
        }));
    }
  }

  retrieveCourses(countResults: number, filter?: string): Observable<Course[]> {
    return this.coursesService.getAllCourses(this.startIdxResult, countResults, filter);
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
    combineLatest(this.countResults$.pipe(first()), timer(1000)).pipe(value => {
        this.loadingService.startLoading();
        return value;
      }
    ).subscribe((countResults) => {
      this.countResults$.next(countResults[0] + this.step);
      this.loadingService.finishLoading();
    });
  }

  editCourse(courseId: string) {
    this.router.navigate(['courses/', courseId]);
  }

  deleteCourse(courseId: string) {
    combineLatest(this.coursesService.deleteCourse(courseId).pipe(first()), timer(500)).pipe(value => {
        this.loadingService.startLoading();
        return value;
      }
    ).subscribe(() => {
      this.countResults$.next(this.countResults$.getValue());
      this.loadingService.finishLoading();
    });
  }


}
