import React from 'react';
import {act, fireEvent} from '@testing-library/react-native';
import {renderWithEmptyReduxStore} from '../../src/utils/testWrappers';
import UserProfileScreen from '../../src/screens/UserProfileScreen';
import {NavigationContainer} from '@react-navigation/native';

describe('User Profile', () => {
  it('should display a user profile', () => {
    jest.useFakeTimers();

    const {getByTestId} = renderWithEmptyReduxStore(
      <NavigationContainer>
        <UserProfileScreen />
      </NavigationContainer>,
    );
    act(() => {
      jest.runAllTimers();
    });
    expect(getByTestId('edit-button')).toBeTruthy();
  });

  it('should display an edit button in display mode', () => {
    jest.useFakeTimers();

    const {getByTestId} = renderWithEmptyReduxStore(
      <NavigationContainer>
        <UserProfileScreen />
      </NavigationContainer>,
    );
    act(() => {
      jest.runAllTimers();
    });
    expect(getByTestId('edit-button')).toBeTruthy();
  });

  it('should change text into edit mode when button pressed', () => {
    jest.useFakeTimers();

    const {getByLabelText, getByTestId} = renderWithEmptyReduxStore(
      <NavigationContainer>
        <UserProfileScreen />
      </NavigationContainer>,
    );
    act(() => {
      jest.runAllTimers();
    });
    fireEvent.press(getByTestId('edit-button'));
    expect(getByLabelText('name')).toBeTruthy();
    expect(getByLabelText('email')).toBeTruthy();
    expect(getByTestId('theme-picker')).toBeTruthy();
  });

  it('should display a save button in edit mode', () => {
    jest.useFakeTimers();

    const {getByTestId} = renderWithEmptyReduxStore(
      <NavigationContainer>
        <UserProfileScreen />
      </NavigationContainer>,
    );
    act(() => {
      jest.runAllTimers();
    });
    fireEvent.press(getByTestId('edit-button'));
    expect(getByTestId('save-button')).toBeTruthy();
  });

  it('should update profile after save', () => {
    jest.useFakeTimers();
    const {getByTestId, getByLabelText, getByText} = renderWithEmptyReduxStore(
      <NavigationContainer>
        <UserProfileScreen />
      </NavigationContainer>,
    );
    act(() => {
      jest.runAllTimers();
    });
    fireEvent.press(getByTestId('edit-button'));
    const picker = getByTestId('theme-picker');
    fireEvent.changeText(getByLabelText('name'), 'Bob');
    fireEvent.changeText(getByLabelText('email'), 'bob@gmail.com');
    fireEvent(picker, 'onValueChange', 'green');
    fireEvent.press(getByTestId('save-button'));
    expect(getByText('Bob')).toBeTruthy();
    expect(getByText('bob@gmail.com')).toBeTruthy();
  });
});
