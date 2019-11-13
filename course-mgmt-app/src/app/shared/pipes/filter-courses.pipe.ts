import {Pipe, PipeTransform} from '@angular/core';
import {Course} from '../../models/course.model';

@Pipe({
  name: 'search'
})
export class FilterCoursesPipe implements PipeTransform {

  transform(courses: Course[], filter: string): Course[] {
    if (courses) {
      return courses.filter(course => course.title.toUpperCase().includes(filter.toUpperCase())
        || course.description.toUpperCase().includes(filter.toUpperCase()));
    } else {
      return [];
    }
  }

}
