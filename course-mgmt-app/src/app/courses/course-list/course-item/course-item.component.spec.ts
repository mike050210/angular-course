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
      id: 'abc',
      title: 'Course title',
      description: 'Course description',
      authors: null,
      creationDate: new Date('12/12/2018'),
      duration: 100,
      language: 'Es',
      rating: 5
    };

    fixture.detectChanges();
  });

  it('is created', () => {
    expect(component).toBeTruthy();
  });

  it('raises the edits event when clicked', async(() => {

    component.course.id = 'abc';
    component.edit.subscribe((courseId: String) => expect(courseId).toBe('abc'));
    component.editCourse();

  }));

  it('raises the delete event when clicked', async(() => {
    component.delete.subscribe((courseId: String) => expect(courseId).toBe('abc'));
    component.deleteCourse();
  }));
});
