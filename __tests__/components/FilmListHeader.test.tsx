import React from 'react';
import FilmListHeader from '../../src/components/FilmListHeader';
import {renderWithReduxStore} from '../../src/utils/testWrappers';
import {act} from '@testing-library/react-native';

describe('Film List Header', () => {
  it('should render correctly', async () => {
    jest.useFakeTimers();
    const {getByTestId} = renderWithReduxStore(<FilmListHeader />);
    act(() => {
      jest.runAllTimers();
    });
    expect(getByTestId('HeaderTitle')).toBeTruthy();
  });
});
