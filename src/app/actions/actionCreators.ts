import Film from '../../models/FilmsResponse';
import {ActionType} from './actions';

export const getFilms = () => ({
  type: ActionType.GET_FILMS,
});

export const getFilmsSuccess = (films: Film[]) => ({
  type: ActionType.GET_FILMS_SUCCESS,
  payload: films,
});

export const getFilmsFailure = () => ({
  type: ActionType.GET_FILMS_FAILURE,
});

export const incrementFilmsScrollIndex = () => ({
  type: ActionType.INCREMENT_FILMS_SCROLL_INDEX,
});

export const updateOrientationState = () => ({
  type: ActionType.UPDATE_ORIENTATION_STATE,
});

export const updateTheme = (theme: string) => ({
  type: ActionType.UPDATE_THEME,
  payload: theme,
});
