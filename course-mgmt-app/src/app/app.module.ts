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
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './store/auth.effects';
import {StoreModule} from '@ngrx/store';
import {reducerFactory as authReducerFactory} from './store/auth.reducer';
import {reducerFactory as coursesReducerFactory} from './store/courses.reducer';
import {CoursesEffects} from './store/courses.effects';

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
    StoreModule.forRoot({authState: authReducerFactory, coursesState: coursesReducerFactory}),
    EffectsModule.forRoot([AuthEffects, CoursesEffects]),
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
