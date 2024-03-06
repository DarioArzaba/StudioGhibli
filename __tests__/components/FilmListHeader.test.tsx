import React from 'react';
import {render} from '@testing-library/react-native';
import FilmListHeader from '../../src/components/FilmListHeader';

describe('Film List Header', () => {
  const mockOnLoadFilmsPress = jest.fn();
  it('should render correctly', () => {
    const {getByText} = render(
      <FilmListHeader onLoadFilmsPress={mockOnLoadFilmsPress} />,
    );
    expect(getByText('Studio Ghibli Films')).toBeTruthy();
  });
});
