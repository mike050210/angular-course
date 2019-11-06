import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseListComponent} from './course-list.component';
import {CourseItemComponent} from './course-item/course-item.component';
import {SharedModule} from '../../shared/shared.module';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseListComponent, CourseItemComponent],
      imports: [SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('is created', () => {
    expect(component).toBeTruthy();
  });

  it('edits a course', () => {
    const editLogSpy = spyOn(console, 'log');
    component.editCourse('abc');
    expect(editLogSpy).toHaveBeenCalled();

  });

  it('deletes a course', () => {
    const deleteLogSpy = spyOn(console, 'log');
    component.deleteCourse('abc');
    expect(deleteLogSpy).toHaveBeenCalled();
  });


});
