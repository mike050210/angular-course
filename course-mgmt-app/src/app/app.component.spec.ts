import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {HeaderUserComponent} from './header/header-user/header-user.component';
import {HeaderLogOffComponent} from './header/header-log-off/header-log-off.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, HeaderComponent, FooterComponent, HeaderUserComponent, HeaderLogOffComponent
      ],
      imports: [RouterModule, RouterTestingModule]
    }).compileComponents();
  }));

  it('creates the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
