import {loginFailure, loginSuccess, logout} from './auth.actions';
import {createReducer, on} from '@ngrx/store';
import {User} from '../models/user-login.model';

export interface State {
  isAuthenticated: boolean;
  user: User | null;
  errorMessage: boolean;

}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  errorMessage: false
};

const _authReducer = createReducer(initialState,
  on(loginSuccess, (state, action) => {
    return {...state, isAuthenticated: true, user: action, errorMessage: false};
  }),
  on(loginFailure, state => {
    return {...state, isAuthenticated: false, user: null, errorMessage: true};
  }),

  on(logout, state => {
    return {...state, isAuthenticated: false, user: null, errorMessage: false};
  }),
);


export function authReducers(state = initialState, action) {
  return _authReducer(state, action);
}
