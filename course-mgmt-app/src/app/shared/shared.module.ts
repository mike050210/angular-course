import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LabelComponent} from './label/label.component';
import {TimeConverterPipe} from './pipes/time-converter.pipe';
import {TimeBasedBorderDirective} from './directives/time-based-border.directive';
import {OrderByPipe} from './pipes/order-by.pipe';
import {SearchCoursePipe} from './pipes/search-course.pipe';


@NgModule({
  declarations: [LabelComponent, TimeConverterPipe, TimeBasedBorderDirective, OrderByPipe, SearchCoursePipe],
  imports: [
    CommonModule
  ],
  exports: [LabelComponent, TimeConverterPipe, OrderByPipe, SearchCoursePipe, TimeBasedBorderDirective]
})
export class SharedModule {
}
