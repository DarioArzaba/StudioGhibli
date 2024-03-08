import {combineReducers} from '@reduxjs/toolkit';
import filmsReducer from './filmsReducer';
import uiReducer from './uiReducer';

const reducer = combineReducers({
  films: filmsReducer,
  userinterface: uiReducer,
});

export default reducer;

export type AppState = ReturnType<typeof reducer>;
