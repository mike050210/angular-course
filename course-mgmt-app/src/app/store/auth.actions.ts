import {createAction, props} from '@ngrx/store';
import {User} from '../models/user-login.model';

export const login = createAction(
  '[Login Page] Login',
  props<{ login: string; password: string }>()
);


export const loginSuccess = createAction(
  '[Login Page] Login Success',
  props<User>()
);

export const loginFailure = createAction(
  '[Login Page] Login Failure'
);


export const logout = createAction(
  '[Login Page] Logout'
);
