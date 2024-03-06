import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import UserProfile from '../../src/components/UserProfile';

describe('User Profile', () => {
  it('should display a user name and an email', () => {
    const {getByText} = render(
      <UserProfile name="Dario" email="dario@gmail.com" />,
    );
    expect(getByText('Dario')).toBeTruthy();
    expect(getByText('dario@gmail.com')).toBeTruthy();
  });
  it('should display a user name and an email given by props', () => {
    const {getByText} = render(
      <UserProfile name="John" email="john@gmail.com" />,
    );
    expect(getByText('John')).toBeTruthy();
    expect(getByText('john@gmail.com')).toBeTruthy();
  });
  it('should display an edit button', () => {
    const {getByTestId} = render(
      <UserProfile name="Dario" email="dario@gmail.com" />,
    );
    expect(getByTestId('edit-button')).toBeTruthy();
  });
  it('should change text into edit mode when button pressed', () => {
    const {getByLabelText, getByTestId} = render(
      <UserProfile name="Dario" email="dario@gmail.com" />,
    );
    fireEvent.press(getByTestId('edit-button'));
    expect(getByLabelText('name')).toBeTruthy();
    expect(getByLabelText('email')).toBeTruthy();
  });
  it('should update name and email after save', () => {
    const {getByTestId, getByLabelText, getByText} = render(
      <UserProfile name="Dario" email="dario@gmail.com" />,
    );
    fireEvent.press(getByTestId('edit-button'));
    fireEvent.changeText(getByLabelText('name'), 'Bob');
    fireEvent.changeText(getByLabelText('email'), 'bob@gmail.com');
    fireEvent.press(getByTestId('save-button'));
    expect(getByText('Bob')).toBeTruthy();
    expect(getByText('bob@gmail.com')).toBeTruthy();
  });
});
