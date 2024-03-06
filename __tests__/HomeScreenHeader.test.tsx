import React from 'react';
import {render, screen} from '@testing-library/react-native';
import HomeScreenHeader from '../src/components/HomeScreenHeader';

describe('HomeScreenHeader tests', () => {
  it('should render title correctly', () => {
    const mockOnLoadFilmsPress = jest.fn();
    const mockOnLoadFilmsPressIn = jest.fn();
    const mockOnLoadFilmspressOut = jest.fn();
    render(
      <HomeScreenHeader
        buttonIsPressed={false}
        onLoadFilmsPress={mockOnLoadFilmsPress}
        onLoadFilmsPressIn={mockOnLoadFilmsPressIn}
        onLoadFilmsPressOut={mockOnLoadFilmspressOut}
      />,
    );
    expect(screen.getByText('Studio Ghibli Films')).toBeTruthy();
  });
});
