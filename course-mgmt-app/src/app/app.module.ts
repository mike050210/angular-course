import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginModule} from './login/login.module';
import {SharedModule} from './shared/shared.module';
import {CoursesModule} from './courses/courses.module';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {HeaderUserComponent} from './header/header-user/header-user.component';
import {HeaderLogOffComponent} from './header/header-log-off/header-log-off.component';
import {ErrorComponent} from './error/error.component';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthHttpInterceptor} from './services/auth-http.interceptor';
import {LoaderComponent} from './loader/loader.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderUserComponent,
    HeaderLogOffComponent,
    AppComponent,
    FooterComponent,
    ErrorComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    LoginModule,
    CoursesModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
