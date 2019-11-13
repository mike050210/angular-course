import {FilterCoursesPipe} from './filter-courses.pipe';
import {Course} from '../../models/course.model';

describe('FilterCoursesPipe', () => {
  let filterCoursesPipe: FilterCoursesPipe;
  let courses: Course[];

  beforeEach(() => {
    filterCoursesPipe = new FilterCoursesPipe();
    courses = [
      {
        id: '123',
        title: 'Course 123',
        creationDate: null,
        duration: 100,
        description: 'Course description',
        language: null,
        thumbnailUrl: null,
        rating: 1
      },
      {
        id: '456',
        title: 'A different title',
        creationDate: null,
        duration: 100,
        description: 'Another and more detailed description',
        language: null,
        thumbnailUrl: null,
        rating: 1
      }];

  });

  it('creates an instance', () => {
    expect(filterCoursesPipe).toBeTruthy();
  });

  it('filters courses', () => {
    const expected: Course[] = [
      {
        id: '456',
        title: 'A different title',
        creationDate: null,
        duration: 100,
        description: 'Another and more detailed description',
        language: null,
        thumbnailUrl: null,
        rating: 1
      }];

    expect(filterCoursesPipe.transform(courses, 'ANOTHER').length).toBeGreaterThan(0);
    expect(filterCoursesPipe.transform(courses, 'detailed description')).toEqual(expected);
  });

  it('filters courses - Not found', () => {
    expect(filterCoursesPipe.transform(courses, 'non existing course').length).toBe(0);
    expect(filterCoursesPipe.transform(null, 'non existing course').length).toBe(0);
  });
});
