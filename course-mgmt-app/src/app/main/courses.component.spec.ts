import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CoursesComponent} from './courses.component';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {SearchControlComponent} from './search-control/search-control.component';
import {CourseListComponent} from './course-list/course-list.component';
import {FormsModule} from '@angular/forms';
import {CourseItemComponent} from './course-list/course-item/course-item.component';
import {SharedModule} from '../shared/shared.module';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoursesComponent,
        BreadcrumbComponent,
        SearchControlComponent,
        CourseListComponent,
        CourseItemComponent],
      imports: [FormsModule, SharedModule]
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
    console.log = jasmine.createSpy();
    component.addNewCourse();
    expect(console.log).toHaveBeenCalled();
  });

  it('loads more courses', () => {
    console.log = jasmine.createSpy();
    component.loadMore();
    expect(console.log).toHaveBeenCalled();
  });
});
