jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
import React from 'react';
import {render} from '@testing-library/react-native';
import FilmListHeader from '../src/components/FilmListHeader';

describe('FilmListHeader tests', () => {
  it('should render correctly', () => {
    const {getByText} = render(<FilmListHeader />);
    expect(getByText('Studio Ghibli Films')).toBeTruthy();
  });
});
