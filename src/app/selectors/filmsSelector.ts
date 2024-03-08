import {AppState} from '../reducers/combineReducers';

const filmsSelector = (state: AppState) => state.films;

export const selectFilms = (state: AppState) => filmsSelector(state).films;

export const selectIsLoading = (state: AppState) =>
  filmsSelector(state).isLoading;

export const selectFilmsScrollIndex = (state: AppState) =>
  filmsSelector(state).index;
