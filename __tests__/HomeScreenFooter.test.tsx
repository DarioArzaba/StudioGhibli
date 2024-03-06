import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreenFooter from '../src/components/HomeScreenFooter';

describe('HomeScreenFooter tests', () => {
  it('should render  correctly', () => {
    const {getByText} = render(<HomeScreenFooter />);
    expect(getByText('© 2024 My App. All rights reserved.')).toBeTruthy();
  });
});