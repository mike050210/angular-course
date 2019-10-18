import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';
import { UserLoginComponent } from './main-header/user-login/user-login.component';
import { LogOffComponent } from './main-header/log-off/log-off.component';



@NgModule({
  declarations: [MainHeaderComponent, UserLoginComponent, LogOffComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MainHeaderComponent
  ]
})
export class HeaderModule { }
