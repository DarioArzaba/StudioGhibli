import React from 'react';
import {act, render} from '@testing-library/react-native';
import HomeCard from '../../src/components/HomeCard';
import {NavigationContainer} from '@react-navigation/native';

describe('Home Screen Header', () => {
  jest.useFakeTimers();
  it('should render correctly', () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <HomeCard />
      </NavigationContainer>,
    );
    act(() => {
      jest.runAllTimers();
    });
    expect(getByTestId('HeaderContainer')).toBeTruthy();
  });
});
