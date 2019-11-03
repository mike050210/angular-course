import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseItemComponent} from './course-item.component';
import {SharedModule} from '../../../shared/shared.module';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseItemComponent],
      imports: [SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;

    component.course = {
      id: 'abc', title: 'Course title',
      creationDate: new Date('12/12/2018'),
      duration: 100,
      description: 'Course description',
      language: 'Es',
      thumbnailUrl: null
    };

    fixture.detectChanges();
  });

  it('is created', () => {
    expect(component).toBeTruthy();
  });

  it('raises the edits event when clicked', () => {

    component.course.id = 'abc';
    component.edit.subscribe((courseId: String) => expect(courseId).toBe('abc'));
    component.editCourse();

  });

  it('raises the delete event when clicked', () => {
    component.delete.subscribe((courseId: String) => expect(courseId).toBe('abc'));
    component.deleteCourse();
  });
});
