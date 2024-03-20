import {combineReducers} from '@reduxjs/toolkit';
import filmsReducer from './filmsReducer';
import uiReducer from './uiReducer';
import authReducer from './authReducer';

const reducer = combineReducers({
  films: filmsReducer,
  userinterface: uiReducer,
  auth: authReducer,
});

export default reducer;

export type AppState = ReturnType<typeof reducer>;
