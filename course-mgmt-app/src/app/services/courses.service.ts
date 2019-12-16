import {Injectable} from '@angular/core';
import {Course} from '../models/course.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  constructor(private readonly httpClient: HttpClient) {
  }

  private urlServer = 'http://localhost:3004';

  public getAllCourses(start: number, count: number, filter?: string): Observable<Course[]> {
    const filterTerms = filter ? `&textFragment=${filter}` : '';
    const endpoint = `${this.urlServer}/courses/?sort=date&start=${start}&count=${count}${filterTerms}`;

    return this.httpClient.get<Course[]>(endpoint);
  }

  public createCourse(course: Course): Observable<Course> {
    course.language = 'En'; // Setting English by default until its implemented
    course.authors = [];
    const endpoint = `${this.urlServer}/courses`;
    return this.httpClient.post<Course>(endpoint, {...course});
  }

  public getCourseById(courseId: String): Observable<Course> {
    const endpoint = `${this.urlServer}/courses/${courseId}`;
    return this.httpClient.get<Course>(endpoint);
  }

  public updateCourse(courseUpdate: Partial<Course>): Observable<Course> {
    const endpoint = `${this.urlServer}/courses/${courseUpdate.id}`;
    return this.httpClient.put<Course>(endpoint, {...courseUpdate});
  }


  public deleteCourse(courseId: String): Observable<Course> {
    const deleteEndpoint = `${this.urlServer}/courses/${courseId}`;

    return this.httpClient.delete<Course>(deleteEndpoint);
  }
}
