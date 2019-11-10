import {Pipe, PipeTransform} from '@angular/core';
import {Course} from '../../models/course.model';

@Pipe({
  name: 'search'
})
export class SearchCoursePipe implements PipeTransform {

  transform(courses: Course[], searchWords: string): Course[] {
    if (courses) {
      return courses.filter(course => course.title.toUpperCase().search(searchWords.toUpperCase()) >= 0
        || course.description.toUpperCase().search(searchWords.toUpperCase()) >= 0);
    } else {
      return [];
    }
  }

}
