import React from 'react';
import {render} from '@testing-library/react-native';
import FilmListHeader from '../src/components/FilmListHeader';

describe('FilmListHeader tests', () => {
  const mockOnLoadFilmsPress = jest.fn();
  const mockOnLoadFilmsPressIn = jest.fn();
  const mockOnLoadFilmspressOut = jest.fn();
  it('should render correctly', () => {
    const {getByText} = render(
      <FilmListHeader
        buttonIsPressed={false}
        onLoadFilmsPress={mockOnLoadFilmsPress}
        onLoadFilmsPressIn={mockOnLoadFilmsPressIn}
        onLoadFilmsPressOut={mockOnLoadFilmspressOut}
      />,
    );
    expect(getByText('Studio Ghibli Films')).toBeTruthy();
  });
});
