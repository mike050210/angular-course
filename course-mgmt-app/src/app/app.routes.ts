import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';

export const ROUTES: Route[] = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: CoursesComponent }
];
