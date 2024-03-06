import React from 'react';
import {render} from '@testing-library/react-native';
import GetFilmsButton from '../../src/components/GetFilmsButton';
import '@testing-library/react-native/extend-expect';

describe('Get Films Button', () => {
  const mockOnLoadFilmsPress = jest.fn();
  it('should render correctly', () => {
    const {getByText} = render(
      <GetFilmsButton onLoadFilmsPress={mockOnLoadFilmsPress} />,
    );
    expect(getByText('Get Films')).toBeTruthy();
  });

  it('should have its starting background color', () => {
    const {getByRole} = render(
      <GetFilmsButton onLoadFilmsPress={mockOnLoadFilmsPress} />,
    );
    expect(getByRole('button')).toHaveStyle({
      backgroundColor: '#008080',
    });
  });
});
