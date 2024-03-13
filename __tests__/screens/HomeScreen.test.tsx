import React from 'react';
import HomeScreen from '../../src/screens/HomeScreen';
import {act} from '@testing-library/react-native';
import {renderWithReduxStore} from '../../src/utils/testWrappers';
import {NavigationContainer} from '@react-navigation/native';

describe('Home Screen', () => {
  it('should render correctly', async () => {
    jest.useFakeTimers();
    const {getByTestId} = renderWithReduxStore(
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>,
    );
    act(() => {
      jest.runAllTimers();
    });
    expect(getByTestId('HomeScreenContainer')).toBeTruthy();
  });
});
