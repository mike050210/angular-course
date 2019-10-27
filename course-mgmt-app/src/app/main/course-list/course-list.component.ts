import {Component, OnChanges, OnInit} from '@angular/core';
import {CoursesService} from '../../services/courses.service';
import {Course} from '../../models/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  coursesList = <Course[]>[];

  constructor(private coursesService: CoursesService) {
    console.log('Executing component constructor');
  }

  ngOnInit() {
    console.log('Executing ngOnInit hook');
    this.coursesList = this.coursesService.getAllCourses();
  }

  onEditedCourse(courseId: string) {
    console.log('Edited course in parent: ' + courseId);
  }

  onDeletedCourse(courseId: string) {
    console.log('Deleted course in parent: ' + courseId);
  }

}
