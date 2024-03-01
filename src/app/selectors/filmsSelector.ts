import {FilmState} from '../reducers/combineReducers';

const filmsSelector = (state: FilmState) => state.films;

export const selectFilms = (state: FilmState) => filmsSelector(state)?.films;
export const selectIsLoading = (state: FilmState) =>
  filmsSelector(state)?.isLoading;
