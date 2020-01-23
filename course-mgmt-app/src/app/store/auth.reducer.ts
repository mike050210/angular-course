import {loginFailure, loginSuccess, logout} from './auth.actions';
import {createReducer, on} from '@ngrx/store';
import {User} from '../models/user-login.model';

export interface State {
  isAuthenticated: boolean;
  user: User | null;
  isError: boolean;

}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  isError: false
};

const reducer = createReducer(initialState,
  on(loginSuccess, (state, action) => {
    return {...state, isAuthenticated: true, user: action, isError: false};
  }),
  on(loginFailure, state => {
    return {...state, isAuthenticated: false, user: null, isError: true};
  }),

  on(logout, state => {
    return {...state, isAuthenticated: false, user: null, isError: false};
  }),
);


export function reducerFactory(state = initialState, action) {
  return reducer(state, action);
}
