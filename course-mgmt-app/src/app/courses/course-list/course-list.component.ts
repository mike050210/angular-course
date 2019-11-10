import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../../models/course.model';
import {SortOrder} from '../../enums/sort-order.enum';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  @Input()
  courses: Course[];

  order: SortOrder = SortOrder.Desc;

  constructor() {
    console.log('Executing component constructor');
  }

  ngOnInit() {
    console.log('Executing ngOnInit hook');
  }

  editCourse(courseId: string) {
    console.log('Edited course in parent: ' + courseId);
  }

  deleteCourse(courseId: string) {
    console.log('Deleted course in parent: ' + courseId);
  }

}
