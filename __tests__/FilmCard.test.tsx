import React from 'react';
import {render, screen} from '@testing-library/react-native';
import Film from '../src/models/FilmsResponse';
import FilmCard from '../src/components/FilmCard';
import '@testing-library/react-native/extend-expect';
import {mockFilm, mockLongFilmDescription} from '../src/utils/testMocks';

describe('Film Card', () => {
  it('should render correctly', () => {
    render(<FilmCard film={mockFilm} isPortrait={true} />);
    expect(screen.getByText(mockFilm.title)).toBeTruthy();
    expect(screen.getByText(mockFilm.description)).toBeTruthy();
  });

  it('should truncate and add ellipsis to long film descriptions', () => {
    const mockFilmWithLongDescription: Film = {
      ...mockFilm,
      description: mockLongFilmDescription,
    };
    render(<FilmCard film={mockFilmWithLongDescription} isPortrait={false} />);
    expect(screen.getByText(mockFilmWithLongDescription.title)).toBeTruthy();
    const truncatedDescription = screen.getByText(/.*\.\.\./);
    expect(truncatedDescription).toBeTruthy();
    expect(truncatedDescription.children).not.toEqual(mockLongFilmDescription);
  });
});
