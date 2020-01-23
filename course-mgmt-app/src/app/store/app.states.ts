import * as auth from './auth.reducers';
import * as courses from './courses.reducers';

export interface AppState {
  authState: auth.State;
  coursesState: courses.State;
}
