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
      description: 'From Setup to Deployment, this course covers it all! You\'ll learn all about Components, Directives, Services, etc.',
      language: 'En',
      thumbnailUrl: ''
    },
    {
      id: 'java11',
      title: 'Java 11 advanced',
      creationDate: new Date(2019, 2, 14),
      duration: 180,
      description: 'Discover the future with the new functionalities of Java 11',
      language: 'Sp',
      thumbnailUrl: ''
    },
    null,
    {
      id: 'es6',
      title: 'ECMAScript 6',
      creationDate: new Date(1986, 0, 13),
      duration: 92,
      description: 'Setting Up a Babel Project. Using let Variables. Using Destructuring. Using Arrow Functions. Setting Up Webpack. ' +
        'Using Modules. Using Classes. Using Promises.',
      language: 'Ru',
      thumbnailUrl: ''
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
