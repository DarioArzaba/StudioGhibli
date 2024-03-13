import React from 'react';
import FilmList from '../../src/components/FilmList';
import {mockFilms} from '../../src/utils/testMocks';
import {renderWithReduxStore} from '../../src/utils/testWrappers';
import {NavigationContainer} from '@react-navigation/native';

describe('Film List', () => {
  const mockOnLoadMoreFilms = jest.fn();

  it('should render correctly', () => {
    const {getByTestId} = renderWithReduxStore(
      <NavigationContainer>
        <FilmList
          isPortrait={true}
          filmsIndex={5}
          onLoadMoreFilms={mockOnLoadMoreFilms}
          films={mockFilms}
        />
        ,
      </NavigationContainer>,
    );
    expect(getByTestId('FilmListContainer')).toBeTruthy();
  });
});
