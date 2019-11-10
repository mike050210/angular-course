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
      creationDate: new Date(2019, 9, 26),
      duration: 120,
      description: 'From Setup to Deployment, this course covers it all! You\'ll learn all about Components, Directives, Services, etc.',
      language: 'En',
      thumbnailUrl: '',
      rating: 3
    },
    {
      id: 'java11',
      title: 'Java 11 advanced',
      creationDate: new Date(2019, 10, 9),
      duration: 180,
      description: 'Discover the future with the new functionalities of Java 11',
      language: 'Sp',
      thumbnailUrl: '',
      rating: 5
    },
    null,
    {
      id: 'es10',
      title: 'ECMAScript 10',
      creationDate: new Date(2020, 1, 14),
      duration: 92,
      description: 'Setting Up a Babel Project. Using let Variables. Using Destructuring. Using Arrow Functions. Setting Up Webpack. ' +
        'Using Modules. Using Classes. Using Promises.',
      language: 'Ru',
      thumbnailUrl: '',
      rating: 4
    },
    {
      id: 'python',
      title: 'Python Tutorial',
      creationDate: new Date(1986, 0, 13),
      duration: 113,
      description: 'This course is a great introduction to both fundamental programming concepts and the Python programming language',
      language: 'En',
      thumbnailUrl: '',
      rating: 5
    }
  ];

  public getAllCourses(): Course[] {
    return this.courses.filter(course => course);
  }

  public addCourse(course: Course): void {
    this.courses.push(course);
  }
}
