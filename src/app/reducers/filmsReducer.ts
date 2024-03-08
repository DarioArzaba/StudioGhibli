import {
  GetFilmsFetch,
  GetFilmsSuccess,
  GetFilmsFailure,
  ActionType,
  IncrementFilmsScrollIndex,
} from '../actions/actions';

export type FilmsActions =
  | GetFilmsFetch
  | GetFilmsSuccess
  | GetFilmsFailure
  | IncrementFilmsScrollIndex;

const initialState = {
  films: [],
  isLoading: false,
  index: 5,
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
    case ActionType.INCREMENT_FILMS_SCROLL_INDEX:
      return {
        ...state,
        index: state.index + 4,
      };
    default:
      return state;
  }
};

export default filmsReducer;
