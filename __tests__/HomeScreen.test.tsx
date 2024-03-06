import {screen} from '@testing-library/react-native';
import React from 'react';
import HomeScreen from '../src/screens/HomeScreen';
import {renderWithProviders} from '../src/utils/testUtils';

describe('GetFilmsButton tests', () => {
  it('should render correctly', () => {
    renderWithProviders(<HomeScreen />);
    expect(screen.getByText('Get Films')).toBeTruthy();
  });
});
