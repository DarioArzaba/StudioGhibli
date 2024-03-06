import React from 'react';
import {render} from '@testing-library/react-native';
import GetFilmsButton from '../src/components/GetFilmsButton';
import '@testing-library/react-native/extend-expect';

describe('GetFilmsButton tests', () => {
  const mockOnLoadFilmsPress = jest.fn();
  const mockOnLoadFilmsPressIn = jest.fn();
  const mockOnLoadFilmspressOut = jest.fn();
  it('should render correctly', () => {
    const {getByText} = render(
      <GetFilmsButton
        buttonIsPressed={false}
        onLoadFilmsPress={mockOnLoadFilmsPress}
        onLoadFilmsPressIn={mockOnLoadFilmsPressIn}
        onLoadFilmsPressOut={mockOnLoadFilmspressOut}
      />,
    );
    expect(getByText('Get Films')).toBeTruthy();
  });

  it('should have its starting background color', () => {
    const {getByRole} = render(
      <GetFilmsButton
        buttonIsPressed={false}
        onLoadFilmsPress={mockOnLoadFilmsPress}
        onLoadFilmsPressIn={mockOnLoadFilmsPressIn}
        onLoadFilmsPressOut={mockOnLoadFilmspressOut}
      />,
    );
    expect(getByRole('button')).toHaveStyle({
      backgroundColor: '#008080',
    });
  });
});
