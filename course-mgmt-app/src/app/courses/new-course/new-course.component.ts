import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Path} from '../../models/paths.model';
import {Router} from '@angular/router';
import {Course} from '../../models/course.model';
import {CoursesService} from '../../services/courses.service';
import {first} from 'rxjs/operators';

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

  constructor(private readonly coursesService: CoursesService, private readonly router: Router) {
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
    this.coursesService.createCourse(this.course).pipe(first()).subscribe();
    this.router.navigate(['courses']);
  }

}
