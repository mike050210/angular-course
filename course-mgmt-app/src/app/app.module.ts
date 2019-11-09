import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginModule} from './login/login.module';
import {SharedModule} from './shared/shared.module';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {CoursesModule} from './courses/courses.module';
import {AuthenticationService} from './services/authentication.service';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {HeaderUserComponent} from './header/header-user/header-user.component';
import {HeaderLogOffComponent} from './header/header-log-off/header-log-off.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderUserComponent,
    HeaderLogOffComponent,
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    LoginModule,
    CoursesModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
