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
