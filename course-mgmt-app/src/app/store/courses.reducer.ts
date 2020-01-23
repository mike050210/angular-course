import {Course} from '../models/course.model';
import {createReducer, on} from '@ngrx/store';
import {filterCourses, increaseCounter, loadCoursesSuccess} from './courses.actions';

export interface State {
  filteredCourses: Course[];
  countResults: number;
  filter: string;

}

export const initialState: State = {
  filteredCourses: [],
  countResults: 5,
  filter: ''
};

const reducer = createReducer(initialState,
  on(loadCoursesSuccess, (state, action) => {
    return {...state, filteredCourses: action.courses};
  }),
  on(increaseCounter, (state, action) => {
    return {...state, countResults: state.countResults + action.step};
  }),
  on(filterCourses, (state, action) => {
    return {...state, filter: action.filter};
  }),
);

export function reducerFactory(state = initialState, action) {
  return reducer(state, action);
}
