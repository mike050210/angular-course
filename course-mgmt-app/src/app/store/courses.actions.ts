import {createAction, props} from '@ngrx/store';
import {Course} from '../models/course.model';

export const loadCourses = createAction(
  '[Courses Page] loadCourses'
);


export const loadCoursesSuccess = createAction(
  '[Courses Page] loadCoursesSuccess',
  props<{ courses: Course[] }>()
);


export const increaseCounter = createAction(
  '[Courses Page] increaseCounter',
  props<{ step: number }>()
);

export const filterCourses = createAction(
  '[Courses Page] filterCourses',
  props<{ filter: string }>()
);

export const addCourse = createAction(
  '[Add Course Page] addCourse',
  props<{ course: Course }>()
);

export const addCourseSuccessful = createAction(
  '[Add Course Page] addCourseSuccessful'
);

export const updateCourse = createAction(
  '[Update Course Page] updateCourse',
  props<{ course: Partial<Course> }>()
);

export const updateCourseSuccessful = createAction(
  '[Update Course Page] updateCourseSuccessful'
);

export const deleteCourse = createAction(
  '[Course Page] deleteCourse',
  props<{ courseId: string }>()
);

export const deleteCourseSuccessful = createAction(
  '[Course Page] deleteCourseSuccessful'
);

export const courseError = createAction(
  '[Course Page] courseError'
);
