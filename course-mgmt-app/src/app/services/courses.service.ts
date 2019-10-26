import {Injectable} from '@angular/core';
import {Course} from '../models/course.model';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  courses: Course[] = [
    {
      id: 'ng8',
      title: 'Angular 8 for dummies',
      creationDate: new Date(2019, 5, 23),
      duration: 120,
      description: 'From Setup to Deployment, this course covers it all! You\'ll learn all about Components, Directives, Services, etc.'
    },
    {
      id: 'java11',
      title: 'Java 11 advanced',
      creationDate: new Date(2019, 2, 14),
      duration: 180,
      description: 'Discover the future with the new functionalities of Java 11'
    }
  ];

  constructor() {
  }

  public getAllCourses(): Course[] {
    return this.courses;
  }

  public addCourse(course: Course): void {
    this.courses.push(course);
  }
}
