import { combineReducers } from '@reduxjs/toolkit';

import { appReducer } from './app/app-slice';
import { authReducer } from './auth/auth-slice';
import { counterReducer } from './counter/counter-slice';
import { userReducer } from './user/user-slice';

export const rootReducer = combineReducers({
  appReducer,
  authReducer,
  counterReducer,
  userReducer
});
