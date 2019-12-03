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
import {CreationDateComponent} from './new-course/creation-date/creation-date.component';
import {DurationComponent} from './new-course/duration/duration.component';


@NgModule({
  declarations: [
    CoursesComponent,
    BreadcrumbComponent,
    SearchControlComponent,
    CourseListComponent,
    CourseItemComponent,
    NewCourseComponent,
    CreationDateComponent,
    DurationComponent
  ],
  imports: [
    CommonModule, FormsModule, SharedModule
  ],
  exports: [CoursesComponent]
})
export class CoursesModule {
}
