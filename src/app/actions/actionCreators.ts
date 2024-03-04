import {ScaledSize} from 'react-native';
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

export const updateOrientationState = () => ({
  type: ActionType.UPDATE_ORIENTATION_STATE,
});

export const toggleGetFilmsButtonIsPressed = () => ({
  type: ActionType.TOGGLE_GET_FILMS_BUTTON_IS_PRESSED,
});
