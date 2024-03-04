jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
import React from 'react';
import {render} from '@testing-library/react-native';
import HomeScreenHeader from '../src/components/HomeScreenHeader';
describe('HomeScreenHeader tests', () => {
  it('should render title correctly', () => {
    const {getByText} = render(<HomeScreenHeader />);
    expect(getByText('Studio Ghibli Films')).toBeTruthy();
  });
});
