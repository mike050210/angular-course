import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  @Output()
  edit = new EventEmitter<string>();

  @Output()
  delete = new EventEmitter<string>();

  constructor() {
    console.log('Executing component constructor');
  }

  ngOnInit() {
    console.log('Executing ngOnInit hook');
  }

  editCourse(courseId: string) {
    this.edit.emit(courseId);
  }

  deleteCourse(courseId: string) {
    this.delete.emit(courseId);
  }

}
