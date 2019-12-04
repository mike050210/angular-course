import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Path} from '../models/paths.model';
import {Course} from '../models/course.model';
import {CoursesService} from '../services/courses.service';
import {FilterCoursesPipe} from '../shared/pipes/filter-courses.pipe';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  filteredCourses: Course[] = [];
  paths: Path[] = [{name: 'Courses', href: ''}];
  loadMoreLabel = 'Load More';
  filtered = false;

  constructor(private readonly coursesService: CoursesService, private readonly router: Router) {
  }

  ngOnInit(): void {
    const username = localStorage.getItem('username');

    if (!username) {
      this.router.navigate(['login']);
    } else {
      this.filteredCourses = this.coursesService.getAllCourses();
    }
  }

  filterCourses(filter: string) {
    this.filteredCourses = new FilterCoursesPipe().transform(this.coursesService.getAllCourses(), filter);
    this.filtered = !!filter;

  }

  addNewCourse() {
    console.log('Adding a new course');
    this.router.navigate(['courses/new']);
  }

  loadMore() {
    console.log('Loading more courses');
  }

  editCourse(courseId: string) {
    this.router.navigate(['courses/', courseId]);
  }

  deleteCourse(courseId: string) {
    if (this.coursesService.deleteCourse(courseId)) {
      this.filteredCourses = this.coursesService.getAllCourses();
    }
  }

}
