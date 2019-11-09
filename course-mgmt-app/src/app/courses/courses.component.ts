import {Component, OnInit} from '@angular/core';
import {Path} from '../models/paths.model';

@Component({
  selector: 'app-main',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  paths = <Path[]>[{name: 'Courses'}];
  loadMoreLabel = 'Load More';

  addNewCourse() {
    console.log('Adding a new course');
  }

  loadMore() {
    console.log('Loading more courses');
  }

}
