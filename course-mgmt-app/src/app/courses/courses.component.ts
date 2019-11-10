import {Component, OnInit} from '@angular/core';
import {Path} from '../models/paths.model';
import {Course} from '../models/course.model';
import {CoursesService} from '../services/courses.service';
import {SearchCoursePipe} from '../shared/pipes/search-course.pipe';

@Component({
  selector: 'app-main',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  allCourses: Course[] = [];
  filteredCourses: Course[] = [];
  paths = <Path[]>[{name: 'Courses'}];
  loadMoreLabel = 'Load More';

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit(): void {
    this.allCourses = this.coursesService.getAllCourses();
    this.filteredCourses = this.allCourses;
  }

  filterCourses(searchWords: string) {
    if (searchWords) {
      this.filteredCourses = new SearchCoursePipe().transform(this.allCourses, searchWords);
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
