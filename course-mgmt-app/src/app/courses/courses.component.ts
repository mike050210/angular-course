import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Path} from '../models/paths.model';
import {Course} from '../models/course.model';
import {CoursesService} from '../services/courses.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {first, switchMap} from 'rxjs/operators';

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
              private readonly router: Router,
              private readonly cdRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    const username = localStorage.getItem('username');

    if (!username) {
      this.router.navigate(['login']);
    } else {
      this.filteredCourses$ = combineLatest(this.countResults$, this.filter$)
        .pipe(switchMap(([counter, filter]) => this.retrieveCourses(counter, filter)));
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
    this.countResults$.pipe(first()).subscribe((countResults) => {
      this.countResults$.next(countResults + this.step);
    });
  }

  editCourse(courseId: string) {
    this.router.navigate(['courses/', courseId]);
  }

  deleteCourse(courseId: string) {
    this.coursesService.deleteCourse(courseId).pipe(first()).subscribe(() => {
      this.filteredCourses$ = combineLatest(this.countResults$, this.filter$)
        .pipe(switchMap(([counter, filter]) => this.retrieveCourses(counter, filter)));
      this.cdRef.markForCheck();
    });
  }

}
