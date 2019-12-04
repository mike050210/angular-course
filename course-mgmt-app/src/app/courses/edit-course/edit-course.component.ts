import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Path} from '../../models/paths.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Course} from '../../models/course.model';
import {CoursesService} from '../../services/courses.service';

@Component({
  selector: 'app-new-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditCourseComponent implements OnInit {

  paths: Path[] = [{name: 'Courses', href: '../../courses'}];
  titleLbl: string;
  descriptionLbl: string;
  durationLbl: string;
  dateLbl: string;
  authorsLbl: string;

  @Input()
  courseId: string;

  course: Course;

  constructor(private readonly coursesService: CoursesService, private readonly router: Router, private actRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.titleLbl = 'Title:';
    this.descriptionLbl = 'Description:';
    this.durationLbl = 'Duration:';
    this.dateLbl = 'Date';
    this.authorsLbl = 'Authors';

    this.actRoute.params.subscribe(params =>
      this.courseId = params['courseId']
    );

    this.course = this.coursesService.getCourseById(this.courseId);

    if (!this.course) {
      this.redirectToMain();
    }

    this.paths.push({name: this.course.title, href: ''});


  }

  updateCourse() {
    this.coursesService.updateCourse(this.course);
    this.redirectToMain();
  }

  cancelUpdateCourse() {
    this.redirectToMain();
  }

  redirectToMain() {
    this.router.navigate(['courses']);
  }


}
