import React from 'react';
import {act, render} from '@testing-library/react-native';
import HomeScreenHeader from '../../src/components/HomeScreenHeader';
import {NavigationContainer} from '@react-navigation/native';

describe('Home Screen Header', () => {
  jest.useFakeTimers();
  it('should render correctly', () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <HomeScreenHeader />
      </NavigationContainer>,
    );
    act(() => {
      jest.runAllTimers();
    });
    expect(getByTestId('HeaderContainer')).toBeTruthy();
  });
});
