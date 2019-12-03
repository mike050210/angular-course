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

  paths: Path[] = [{name: 'Courses', href: 'courses'}, {name: 'New Course', href: ''}];
  titleLbl: string;
  descriptionLbl: string;
  durationLbl: string;
  dateLbl: string;
  authorsLbl: string;

  course: Course;

  constructor(private readonly coursesService: CoursesService, private readonly router: Router) {
  }

  ngOnInit(): void {
    this.titleLbl = 'Title:';
    this.descriptionLbl = 'Description:';
    this.durationLbl = 'Duration:';
    this.dateLbl = 'Date';
    this.authorsLbl = 'Authors';

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
    this.redirectToMain();
  }

  cancelNewCourse() {
    this.redirectToMain();
  }

  redirectToMain() {
    this.router.navigate(['courses']);
  }


}
