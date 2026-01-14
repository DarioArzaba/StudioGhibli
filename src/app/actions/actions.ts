import Film from '../../models/FilmsResponse';

export enum ActionType {
  GET_FILMS = 'GET_FILMS',
  GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS',
  GET_FILMS_FAILURE = 'GET_FILMS_FAILURE',
  INCREMENT_FILMS_SCROLL_INDEX = 'INCREMENT_FILMS_SCROLL_INDEX',
  UPDATE_THEME = 'UPDATE_THEME',
}

export interface GetFilmsFetch {
  type: ActionType.GET_FILMS;
}

export interface GetFilmsSuccess {
  type: ActionType.GET_FILMS_SUCCESS;
  payload: Film[];
}

export interface GetFilmsFailure {
  type: ActionType.GET_FILMS_FAILURE;
}

export interface IncrementFilmsScrollIndex {
  type: ActionType.INCREMENT_FILMS_SCROLL_INDEX;
}

export interface UpdateTheme {
  type: ActionType.UPDATE_THEME;
  payload: string;
}
