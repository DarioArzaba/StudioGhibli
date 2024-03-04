jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
import React from 'react';
import {render} from '@testing-library/react-native';
import FilmList from '../src/components/FilmList';

describe('FilmList tests', () => {
  it('should render correctly', () => {
    const {getByTestId} = render(<FilmList />);
    expect(getByTestId('FilmListContainer')).toBeTruthy();
  });
});
