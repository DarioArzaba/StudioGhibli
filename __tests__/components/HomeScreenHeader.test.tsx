import React from 'react';
import {act, render} from '@testing-library/react-native';
import HomeHub from '../../src/components/HomeHub';
import {NavigationContainer} from '@react-navigation/native';

describe('Home Screen Header', () => {
  jest.useFakeTimers();
  it('should render correctly', () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <HomeHub />
      </NavigationContainer>,
    );
    act(() => {
      jest.runAllTimers();
    });
    expect(getByTestId('HeaderContainer')).toBeTruthy();
  });
});
