import {combineReducers} from '@reduxjs/toolkit';
import filmsReducer from './filmsReducer';

const reducer = combineReducers({
  films: filmsReducer,
});

export default reducer;

export type FilmState = ReturnType<typeof reducer>;
