import {SearchCoursePipe} from './search-course.pipe';
import {Course} from '../../models/course.model';

describe('SearchCoursePipe', () => {
  let searchCoursePipe: SearchCoursePipe;
  let courses: Course[];

  beforeEach(() => {
    searchCoursePipe = new SearchCoursePipe();
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
    expect(searchCoursePipe).toBeTruthy();
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

    expect(searchCoursePipe.transform(courses, 'ANOTHER').length).toBeGreaterThan(0);
    expect(searchCoursePipe.transform(courses, 'detailed description')).toEqual(expected);
  });

  it('filters courses - Not found', () => {
    expect(searchCoursePipe.transform(courses, 'non existing course').length).toBe(0);
    expect(searchCoursePipe.transform(null, 'non existing course').length).toBe(0);
  });
});
