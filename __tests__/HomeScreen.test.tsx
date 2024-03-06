import React from 'react';
import HomeScreen from '../src/screens/HomeScreen';
import {fireEvent, screen} from '@testing-library/react-native';
import {renderWithProviders} from '../src/utils/testUtils';

describe('GetFilmsButton tests', () => {
  it('should render correctly', () => {
    renderWithProviders(<HomeScreen />);
    fireEvent.press(screen.getByRole('button'));
    expect(screen.getByText('Get Films')).toBeTruthy();
  });
});
