jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
import React from 'react';
import {render} from '@testing-library/react-native';
import GetFilmsButton from '../src/components/GetFilmsButton';

describe('GetFilmsButton tests', () => {
  jest.mock('react-redux', () => ({
    useDispatch: jest.fn(() => {}),
    useSelector: jest.fn(),
  }));

  it('should render correctly', () => {
    const {getByText} = render(<GetFilmsButton />);
    expect(getByText('Get Films')).toBeTruthy();
  });

  it('should have its starting background color', () => {
    const {getByRole} = render(<GetFilmsButton />);
    expect(getByRole('button')).toHaveStyle({
      backgroundColor: '#008080',
    });
  });

  // Not because all cause 'dispatch' to be called
  // it('executes the onPress function', () => {
  //   const handleClick = jest.fn(() => {});
  //   const {getByRole} = render(<GetFilmsButton />);
  //   fireEvent.press(getByRole('button'));
  //   expect(handleClick).toHaveBeenCalled();
  // });
});
