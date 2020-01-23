import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Path} from '../models/paths.model';
import {Course} from '../models/course.model';
import {Router} from '@angular/router';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {AppState} from '../store/app.states';
import {deleteCourse, filterCourses, increaseCounter, loadCourses} from '../store/courses.actions';

@Component({
  selector: 'app-main',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CoursesComponent implements OnInit {
  filteredCourses$: Observable<Course[]>;
  filter$ = new BehaviorSubject<string>('');
  paths: Path[] = [{name: 'Courses', href: ''}];
  loadMoreLabel = 'Load More';
  readonly step = 5;


  constructor(private readonly store: Store<AppState>,
              private readonly router: Router
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
    this.filteredCourses$ = this.store.select('coursesState').pipe(map(state => state.filteredCourses));
  }

  filterCourses(filter: string) {
    this.store.dispatch(filterCourses({filter}));
  }

  addNewCourse() {
    console.log('Adding a new course');
    this.router.navigate(['courses/new']);
  }

  loadMore() {
    this.store.dispatch(increaseCounter({step: this.step}));
  }

  editCourse(courseId: string) {
    this.router.navigate(['courses/', courseId]);
  }

  deleteCourse(courseId: string) {
    this.store.dispatch(deleteCourse({courseId}));
  }


}
