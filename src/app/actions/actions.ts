import Film from '../../models/FilmsResponse';

export enum ActionType {
  GET_FILMS = 'GET_FILMS',
  GET_FILMS_SUCCESS = 'GET_FILMS_SUCCESS',
  GET_FILMS_FAILURE = 'GET_FILMS_FAILURE',
  UPDATE_ORIENTATION_STATE = 'UPDATE_ORIENTATION_STATE',
  TOGGLE_GET_FILMS_BUTTON_IS_PRESSED = 'TOGGLE_GET_FILMS_BUTTON_IS_PRESSED',
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

export interface UpdateOrientationState {
  type: ActionType.UPDATE_ORIENTATION_STATE;
}

export interface ToggleGetFilmsButtonIsPressed {
  type: ActionType.TOGGLE_GET_FILMS_BUTTON_IS_PRESSED;
}

export interface IncrementFilmsScrollIndex {
  type: ActionType.INCREMENT_FILMS_SCROLL_INDEX;
}

export interface UpdateTheme {
  type: ActionType.UPDATE_THEME;
  payload: string;
}
