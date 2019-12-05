import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Path} from '../../models/paths.model';
import {Router} from '@angular/router';
import {Course} from '../../models/course.model';
import {CoursesService} from '../../services/courses.service';

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
      creationDate: new Date(),
      description: '',
      duration: null,
      id: '',
      language: '',
      rating: 0,
      thumbnailUrl: '',
      title: ''
    };
  }

  saveNewCourse() {
    this.coursesService.createCourse(this.course);
    this.router.navigate(['courses']);
  }

}
