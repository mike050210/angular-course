import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Path} from '../models/paths.model';
import {Course} from '../models/course.model';
import {CoursesService} from '../services/courses.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CoursesComponent implements OnInit {
  filteredCourses: Course[] = [];
  paths: Path[] = [{name: 'Courses', href: ''}];
  loadMoreLabel = 'Load More';
  filter: string;
  startIdxResult: number;
  countResults: number;
  step: number;


  constructor(private httpClient: HttpClient,
              private readonly coursesService: CoursesService,
              private readonly router: Router,
              private readonly cdRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.startIdxResult = 0;
    this.countResults = 5;
    this.step = 5;

    const username = localStorage.getItem('username');

    if (!username) {
      this.router.navigate(['login']);
    } else {
      this.retrieveCourses();
    }
  }

  retrieveCourses(filter?: string): void {
    this.coursesService.getAllCourses(this.startIdxResult, this.countResults, filter)
      .subscribe((items: Course[]) => {
        this.filteredCourses = items;
        this.cdRef.markForCheck();
      });
  }

  filterCourses(filter: string) {
    this.filter = filter;
    this.retrieveCourses(this.filter);

  }

  addNewCourse() {
    console.log('Adding a new course');
    this.router.navigate(['courses/new']);
  }

  loadMore() {
    console.log('Loading more courses');

    this.coursesService.getAllCourses(this.countResults, this.step, this.filter)
      .subscribe((items: Course[]) => {
        this.filteredCourses = [...this.filteredCourses, ...items];
        this.countResults += this.step;
        this.cdRef.markForCheck();
      });
  }

  editCourse(courseId: string) {
    this.router.navigate(['courses/', courseId]);
  }

  deleteCourse(courseId: string) {
    this.startIdxResult = 0;
    this.countResults = 5;
    this.coursesService.deleteCourse(courseId, this.startIdxResult, this.countResults)
      .subscribe((items: Course[]) => {
        this.filteredCourses = items;
        this.cdRef.markForCheck();
      });
  }

}
