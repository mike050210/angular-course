import {Component, OnInit} from '@angular/core';
import {Path} from '../models/paths.model';
import {Course} from '../models/course.model';
import {CoursesService} from '../services/courses.service';
import {FilterCoursesPipe} from '../shared/pipes/filter-courses.pipe';

@Component({
  selector: 'app-main',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  allCourses: Course[] = [];
  filteredCourses: Course[] = [];
  paths: Path[] = [{name: 'Courses', href: ''}];
  loadMoreLabel = 'Load More';

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit(): void {
    this.allCourses = this.coursesService.getAllCourses();
    this.filteredCourses = this.allCourses;
  }

  filterCourses(filter: string) {
    if (filter) {
      this.filteredCourses = new FilterCoursesPipe().transform(this.allCourses, filter);
    } else {
      this.filteredCourses = this.allCourses;
    }
  }

  addNewCourse() {
    console.log('Adding a new course');
  }

  loadMore() {
    console.log('Loading more courses');
  }

}
