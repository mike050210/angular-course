import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { MainModule } from './main/main.module';
import { ValidateLoginService } from './services/validate-login.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HeaderModule,
    LoginModule,
    MainModule,
    FooterModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ValidateLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
