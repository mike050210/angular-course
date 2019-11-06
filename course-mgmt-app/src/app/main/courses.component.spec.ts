import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CoursesComponent} from './courses.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {CoursesModule} from './courses.module';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoursesModule, FormsModule, SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('is created', () => {
    expect(component).toBeTruthy();
  });

  it('add new course', () => {
    const logAddCourse = spyOn(console, 'log');
    component.loadMore();
    expect(logAddCourse).toHaveBeenCalled();
  });

  it('loads more courses', () => {
    const logMoreCourses = spyOn(console, 'log');
    component.loadMore();
    expect(logMoreCourses).toHaveBeenCalled();
  });
});
