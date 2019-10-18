import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';



@NgModule({
  declarations: [MainComponent, BreadcrumbComponent],
  imports: [
    CommonModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
