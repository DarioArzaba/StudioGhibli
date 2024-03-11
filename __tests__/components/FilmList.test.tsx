import React from 'react';
import {render} from '@testing-library/react-native';
import FilmList from '../../src/components/FilmList';
import {mockFilms} from '../../src/utils/testMocks';

describe('Film List', () => {
  const mockOnLoadMoreFilms = jest.fn();

  it('should render correctly', () => {
    const {getByTestId} = render(
      <FilmList
        isPortrait={true}
        filmsIndex={5}
        onLoadMoreFilms={mockOnLoadMoreFilms}
        films={mockFilms}
      />,
    );
    expect(getByTestId('FilmListContainer')).toBeTruthy();
  });
});
