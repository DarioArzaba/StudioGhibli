import React from 'react';
import {act, render} from '@testing-library/react-native';
import HomeFooter from '../../src/components/HomeFooter';

describe('Home Screen Footer', () => {
  it('should render correctly', () => {
    jest.useFakeTimers();
    const {getByTestId} = render(<HomeFooter />);
    act(() => {
      jest.runAllTimers();
    });
    expect(getByTestId('footer')).toBeTruthy();
  });
});
