import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../../models/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent {

  @Input()
  course: Course;

  @Output()
  editedCourse = new EventEmitter<string>();

  @Output()
  deletedCourse = new EventEmitter<string>();

  editCourse() {
    this.editedCourse.emit(this.course.id);
  }

  deleteCourse() {
    this.deletedCourse.emit(this.course.id);
  }

}
