jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreenHeader from '../src/components/HomeScreenHeader';
import {screen} from '@testing-library/react-native';

describe('HomeScreenHeader tests', () => {
  it('should render title correctly', () => {
    render(<HomeScreenHeader />);
    expect(screen.getByText('Studio Ghibli Films')).toBeTruthy();
  });
});
