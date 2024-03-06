import React from 'react';
import {render} from '@testing-library/react-native';
import FilmList from '../src/components/FilmList';

describe('FilmList tests', () => {
  const mockOnLoadMoreFilms = jest.fn();
  const mockOnLoadFilmsPress = jest.fn();
  const mockOnLoadFilmsPressIn = jest.fn();
  const mockOnLoadFilmspressOut = jest.fn();
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
  it('should render correctly', () => {
    const {getByTestId} = render(
      <FilmList
        isPortrait={true}
        buttonIsPressed={false}
        filmsIndex={5}
        onLoadMoreFilms={mockOnLoadMoreFilms}
        onLoadFilmsPress={mockOnLoadFilmsPress}
        onLoadFilmsPressIn={mockOnLoadFilmsPressIn}
        onLoadFilmsPressOut={mockOnLoadFilmspressOut}
        films={mockFilms}
      />,
    );
    expect(getByTestId('FilmListContainer')).toBeTruthy();
  });
});
