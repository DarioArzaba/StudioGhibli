import React from 'react';
import {act, render} from '@testing-library/react-native';
import HomeScreenFooter from '../../src/components/HomeScreenFooter';

describe('Home Screen Footer', () => {
  it('should render correctly', () => {
    jest.useFakeTimers();
    const {getByTestId} = render(<HomeScreenFooter />);
    act(() => {
      jest.runAllTimers();
    });
    expect(getByTestId('footer')).toBeTruthy();
  });
});
