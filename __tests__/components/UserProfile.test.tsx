import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import UserProfile from '../../src/components/UserProfile';

describe('User Profile', () => {
  it('should display a user profile', () => {
    const {getByText} = render(<UserProfile />);
    expect(getByText('Dario')).toBeTruthy();
    expect(getByText('dario@gmail.com')).toBeTruthy();
    expect(getByText('Blue')).toBeTruthy();
  });

  it('should display an edit button in display mode', () => {
    const {getByTestId} = render(<UserProfile />);
    expect(getByTestId('edit-button')).toBeTruthy();
  });

  it('should change text into edit mode when button pressed', () => {
    const {getByLabelText, getByTestId} = render(<UserProfile />);
    fireEvent.press(getByTestId('edit-button'));
    expect(getByLabelText('name')).toBeTruthy();
    expect(getByLabelText('email')).toBeTruthy();
    expect(getByTestId('theme-picker')).toBeTruthy();
  });

  it('should display a save button in edit mode', () => {
    const {getByTestId} = render(<UserProfile />);
    fireEvent.press(getByTestId('edit-button'));
    expect(getByTestId('save-button')).toBeTruthy();
  });

  it('should update profile after save', () => {
    const {getByTestId, getByLabelText, getByText} = render(<UserProfile />);
    fireEvent.press(getByTestId('edit-button'));
    const picker = getByTestId('theme-picker');

    // Text inputs
    fireEvent.changeText(getByLabelText('name'), 'Bob');
    fireEvent.changeText(getByLabelText('email'), 'bob@gmail.com');
    // Picker
    fireEvent(picker, 'onValueChange', 'red');
    // Save profile
    fireEvent.press(getByTestId('save-button'));

    expect(getByText('Bob')).toBeTruthy();
    expect(getByText('bob@gmail.com')).toBeTruthy();
    expect(getByText('red')).toBeTruthy();
  });
});
