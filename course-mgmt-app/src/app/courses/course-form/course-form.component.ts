import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Path} from '../../models/paths.model';
import {Course} from '../../models/course.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  @Input()
  formTitle: string;

  @Input()
  course: Course;

  @Input()
  paths: Path[];

  @Output()
  update = new EventEmitter<string>();

  titleLbl: string;
  descriptionLbl: string;
  durationLbl: string;
  dateLbl: string;
  authorsLbl: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.titleLbl = 'Title:';
    this.descriptionLbl = 'Description:';
    this.durationLbl = 'Duration:';
    this.dateLbl = 'Date';
    this.authorsLbl = 'Authors';
  }

  updateCourse() {
    this.update.emit();
  }

  cancelUpdateCourse() {
    this.router.navigate(['courses']);
  }


}

