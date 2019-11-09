import {Component, OnChanges, OnInit} from '@angular/core';
import {CoursesService} from '../../services/courses.service';
import {Course} from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: Course[] = [];

  constructor(private coursesService: CoursesService) {
    console.log('Executing component constructor');
  }

  ngOnInit() {
    console.log('Executing ngOnInit hook');
    this.courses = this.coursesService.getAllCourses();
  }

  editCourse(courseId: string) {
    console.log('Edited course in parent: ' + courseId);
  }

  deleteCourse(courseId: string) {
    console.log('Deleted course in parent: ' + courseId);
  }

}
