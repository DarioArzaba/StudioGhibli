import React from 'react';
import GetFilmsButton from '../../src/components/GetFilmsButton';
import '@testing-library/react-native/extend-expect';
import {renderWithReduxStore} from '../../src/utils/testWrappers';
import {NavigationContainer} from '@react-navigation/native';
import {act} from '@testing-library/react-native';

describe('Get Films Button', () => {
  it('should render correctly', async () => {
    jest.useFakeTimers();
    const {getByRole} = renderWithReduxStore(
      <NavigationContainer>
        <GetFilmsButton />
      </NavigationContainer>,
    );
    act(() => {
      jest.runAllTimers();
    });
    expect(getByRole('button')).toBeTruthy();
  });

  it('should have its starting background color', () => {
    jest.useFakeTimers();
    const {getByRole} = renderWithReduxStore(
      <NavigationContainer>
        <GetFilmsButton />
      </NavigationContainer>,
    );
    act(() => {
      jest.runAllTimers();
    });
    expect(getByRole('button')).toHaveStyle({
      backgroundColor: '#008080',
    });
  });
});
