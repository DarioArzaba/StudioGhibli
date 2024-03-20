import React from 'react';
import {act, render} from '@testing-library/react-native';
import Footer from '../../src/components/Footer';

describe('Home Screen Footer', () => {
  it('should render correctly', () => {
    jest.useFakeTimers();
    const {getByTestId} = render(<Footer />);
    act(() => {
      jest.runAllTimers();
    });
    expect(getByTestId('footer')).toBeTruthy();
  });
});
