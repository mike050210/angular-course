import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SearchControlComponent } from './search-control/search-control.component';
import {FormsModule} from '@angular/forms';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-list/course-item/course-item.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [MainComponent, BreadcrumbComponent, SearchControlComponent, CourseListComponent, CourseItemComponent],
  imports: [
    CommonModule, FormsModule, SharedModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
