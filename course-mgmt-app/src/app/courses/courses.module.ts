import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoursesComponent} from './courses.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {SearchControlComponent} from './search-control/search-control.component';
import {FormsModule} from '@angular/forms';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseItemComponent} from './course-list/course-item/course-item.component';
import {SharedModule} from '../shared/shared.module';
import {NewCourseComponent} from './new-course/new-course.component';
import {CreationDateComponent} from './creation-date/creation-date.component';
import {DurationComponent} from './duration/duration.component';
import {EditCourseComponent} from './edit-course/edit-course.component';
import {RouterModule} from '@angular/router';
import {CourseFormComponent} from './course-form/course-form.component';
import {AuthGuard} from '../services/auth.guard';


@NgModule({
  declarations: [
    CoursesComponent,
    BreadcrumbComponent,
    SearchControlComponent,
    CourseListComponent,
    CourseItemComponent,
    NewCourseComponent,
    EditCourseComponent,
    CreationDateComponent,
    DurationComponent,
    CourseFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forRoot([
      {
        path: 'courses',
        component: CoursesComponent,
        canActivate: [AuthGuard]
      }
    ])
  ],
  exports: [CoursesComponent]
})
export class CoursesModule {
}
