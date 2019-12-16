import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Path} from '../../models/paths.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Course} from '../../models/course.model';
import {CoursesService} from '../../services/courses.service';
import {Subscription} from 'rxjs';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditCourseComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  paths: Path[] = [{name: 'Courses', href: '../../courses'}];

  @Input()
  courseId: string;

  course: Course;

  constructor(private readonly coursesService: CoursesService,
              private readonly router: Router,
              private readonly actRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.subscription = this.actRoute.params.subscribe(params =>
      this.courseId = params['courseId']
    );

    this.coursesService.getCourseById(this.courseId).pipe(first())
      .subscribe((item: Course) => {
        this.course = item;
        if (!this.course) {
          this.router.navigate(['error']);
        }
        this.paths.push({name: this.course.title, href: ''});
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateCourse() {
    this.coursesService.updateCourse(this.course).pipe(first())
      .subscribe(item => this.router.navigate(['courses']));
  }

}
