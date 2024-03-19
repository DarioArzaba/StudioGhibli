import Film from '../../models/FilmsResponse';
import User from '../../models/User';
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

export const updateTheme = (theme: string) => ({
  type: ActionType.UPDATE_THEME,
  payload: theme,
});

export const userSignIn = () => ({
  type: ActionType.SIGN_IN,
});

export const userSignOut = () => ({
  type: ActionType.SIGN_OUT,
});

export const userSignUp = (user: User) => ({
  type: ActionType.SIGN_UP,
  payload: user,
});
