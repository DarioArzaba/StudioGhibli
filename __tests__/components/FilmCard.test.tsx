import React from 'react';
import {screen} from '@testing-library/react-native';
import Film from '../../src/models/FilmsResponse';
import FilmCard from '../../src/components/FilmCard';
import '@testing-library/react-native/extend-expect';
import {mockFilm, mockLongFilmDescription} from '../../src/utils/testMocks';
import {renderWithEmptyReduxStore} from '../../src/utils/testWrappers';
import {NavigationContainer} from '@react-navigation/native';

describe('Film Card', () => {
  it('should render correctly', () => {
    const {getByText} = renderWithEmptyReduxStore(
      <NavigationContainer>
        <FilmCard film={mockFilm} isPortrait={true} />
      </NavigationContainer>,
    );
    expect(getByText(mockFilm.title)).toBeTruthy();
    expect(getByText(mockFilm.description)).toBeTruthy();
  });

  it('should truncate and add ellipsis to long film descriptions', () => {
    const mockFilmWithLongDescription: Film = {
      ...mockFilm,
      description: mockLongFilmDescription,
    };
    renderWithEmptyReduxStore(
      <NavigationContainer>
        <FilmCard film={mockFilmWithLongDescription} isPortrait={false} />
      </NavigationContainer>,
    );
    expect(screen.getByText(mockFilmWithLongDescription.title)).toBeTruthy();
    const truncatedDescription = screen.getByText(/.*\.\.\./);
    expect(truncatedDescription).toBeTruthy();
    expect(truncatedDescription.children).not.toEqual(mockLongFilmDescription);
  });
});
