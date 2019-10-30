import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLogOffComponent } from './header-log-off.component';

describe('HeaderLogOffComponent', () => {
  let component: HeaderLogOffComponent;
  let fixture: ComponentFixture<HeaderLogOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderLogOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLogOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('is created', () => {
    expect(component).toBeTruthy();
  });
});
