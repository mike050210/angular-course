import {Route} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {CoursesComponent} from './courses/courses.component';
import {NewCourseComponent} from './courses/new-course/new-course.component';
import {ErrorComponent} from './error/error.component';
import {EditCourseComponent} from './courses/edit-course/edit-course.component';
import {AuthGuard} from './services/auth.guard';

export const ROUTES: Route[] = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'courses', component: CoursesComponent, canActivate: [AuthGuard]},
  {path: 'courses/new', component: NewCourseComponent, canActivate: [AuthGuard]},
  {path: 'courses/:courseId', component: EditCourseComponent, canActivate: [AuthGuard]},
  {path: 'error', component: ErrorComponent},
  {path: '**', component: ErrorComponent}
];
