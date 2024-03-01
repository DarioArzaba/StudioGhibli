import {
  GetFilmsFetch,
  GetFilmsSuccess,
  GetFilmsFailure,
  ActionType,
} from '../actions/actions';

type FilmsActions = GetFilmsFetch | GetFilmsSuccess | GetFilmsFailure;

const initialState = {
  films: [],
  isLoading: false,
};

const filmsReducer = (state = initialState, action: FilmsActions) => {
  switch (action.type) {
    case ActionType.GET_FILMS:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.GET_FILMS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case ActionType.GET_FILMS_SUCCESS:
      return {
        ...state,
        films: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default filmsReducer;
