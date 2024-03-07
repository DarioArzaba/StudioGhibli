import {combineReducers} from '@reduxjs/toolkit';
import filmsReducer from './filmsReducer';
import uiReducer from './uiReducer';
import themeReducer from './themeReducer';

const reducer = combineReducers({
  films: filmsReducer,
  userinterface: uiReducer,
  theme: themeReducer,
});

export default reducer;

export type AppState = ReturnType<typeof reducer>;
