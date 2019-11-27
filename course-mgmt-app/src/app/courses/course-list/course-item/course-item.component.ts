import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../../../models/course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  @Input()
  course: Course;

  @Output()
  edit = new EventEmitter<string>();

  @Output()
  delete = new EventEmitter<string>();


  ngOnInit() {
    if (!this.course) {
      throw new Error('Error: Mandatory input value "course" is not provided');
    }
  }


  editCourse() {
    this.edit.emit(this.course.id);
  }

  deleteCourse() {
    const delConfirmation = confirm(`Are you sure you want to delete "${this.course.title}"?`);
    if (delConfirmation) {
      this.delete.emit(this.course.id);
    }
  }

}
