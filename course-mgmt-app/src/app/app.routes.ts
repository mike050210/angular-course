import {Route} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CoursesComponent} from './courses/courses.component';
import {NewCourseComponent} from './courses/new-course/new-course.component';

export const ROUTES: Route[] = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'new-course', component: NewCourseComponent}
];
