import {ActionType} from '../../src/app/actions/actions';
import filmsReducer, {FilmsActions} from '../../src/app/reducers/filmsReducer';

describe('Films Reducer', () => {
  const initialState = {
    films: [],
    isLoading: false,
  };

  it('Should return initial state or non matching action', () => {
    expect(
      filmsReducer(initialState, {
        type: '',
      }),
    ).toEqual(initialState);
  });

  it('Should handle get films action', () => {
    const action: FilmsActions = {type: ActionType.GET_FILMS};
    expect(filmsReducer(initialState, action)).toEqual({
      films: [],
      isLoading: true,
    });
  });

  it('Should handle get films failure', () => {
    const action: FilmsActions = {type: ActionType.GET_FILMS_FAILURE};
    expect(filmsReducer(initialState, action)).toEqual({
      films: [],
      isLoading: false,
    });
  });

  it('Should handle get films success', () => {
    const mockFilms = [
      {
        id: 'uniqueId 1',
        title: 'Film Title 1',
        description: 'A generic film description 1.',
        image: 'https://example.com/image1.jpg',
      },
      {
        id: 'uniqueId 2',
        title: 'Film Title 2',
        description: 'A generic film description 2.',
        image: 'https://example.com/image2.jpg',
      },
    ];
    const action: FilmsActions = {
      type: ActionType.GET_FILMS_SUCCESS,
      payload: mockFilms,
    };
    expect(filmsReducer(initialState, action)).toEqual({
      films: mockFilms,
      isLoading: false,
    });
  });
});
