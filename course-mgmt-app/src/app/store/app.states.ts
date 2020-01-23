import * as auth from './auth.reducer';
import * as courses from './courses.reducer';

export interface AppState {
  authState: auth.State;
  coursesState: courses.State;
}
