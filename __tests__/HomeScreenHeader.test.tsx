import React from 'react';
import {render, screen} from '@testing-library/react-native';
import HomeScreenHeader from '../src/components/HomeScreenHeader';

describe('Home Screen Header', () => {
  it('should render correctly', () => {
    const mockOnLoadFilmsPress = jest.fn();
    render(<HomeScreenHeader onLoadFilmsPress={mockOnLoadFilmsPress} />);
    expect(screen.getByText('Studio Ghibli Films')).toBeTruthy();
  });
});
