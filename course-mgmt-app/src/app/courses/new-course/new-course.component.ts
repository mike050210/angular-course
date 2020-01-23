import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Path} from '../../models/paths.model';
import {Course} from '../../models/course.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.states';
import {addCourse} from '../../store/courses.actions';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewCourseComponent implements OnInit {

  formTitle = 'New Course';

  course: Course;

  paths: Path[] = [{name: 'Courses', href: '../../courses'}, {name: 'New Course', href: ''}];

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {

    this.course = {
      id: '',
      title: '',
      description: '',
      creationDate: new Date(),
      authors: null,
      rating: 0,
      duration: null,
      language: ''
    };
  }

  saveNewCourse() {
    this.store.dispatch(addCourse({course: this.course}));
  }

}
