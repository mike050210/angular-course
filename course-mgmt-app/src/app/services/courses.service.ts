import {Injectable} from '@angular/core';
import {Course} from '../models/course.model';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  static courses: Course[] = [
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
    return CoursesService.courses.filter(course => course);
  }

  public createCourse(course: Course): void {
    CoursesService.courses.push(course);
  }

  public getCourseById(courseId: String): Course {
    const courseItem = CoursesService.courses.find(course => course.id === courseId);
    return courseItem ? courseItem : null;
  }

  public updateCourse(course: Course): boolean {
    const courseIdx = CoursesService.courses.findIndex(courseToUpdate => course.id === courseToUpdate.id);
    if (courseIdx !== -1) {
      CoursesService.courses[courseIdx].description = course.description;
      CoursesService.courses[courseIdx].title = course.title;
      CoursesService.courses[courseIdx].rating = course.rating;
      CoursesService.courses[courseIdx].creationDate = course.creationDate;
      CoursesService.courses[courseIdx].language = course.language;
      CoursesService.courses[courseIdx].duration = course.duration;
      CoursesService.courses[courseIdx].thumbnailUrl = course.thumbnailUrl;
      return true;
    } else {
      return false;
    }
  }

  public deleteCourse(courseId: String): boolean {
    const courseIdx = CoursesService.courses.findIndex(course => course !== null && courseId === course.id);
    if (courseIdx !== -1) {
      CoursesService.courses.splice(courseIdx, 1);
      return true;
    } else {
      return false;
    }
  }
}
