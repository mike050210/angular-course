import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchControlComponent} from './search-control.component';
import {FormsModule} from '@angular/forms';

describe('SearchControlComponent', () => {
  let component: SearchControlComponent;
  let fixture: ComponentFixture<SearchControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchControlComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('is created', () => {
    expect(component).toBeTruthy();
  });
});
