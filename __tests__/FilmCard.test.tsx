jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
import React from 'react';
import {render} from '@testing-library/react-native';
import Film from '../src/models/FilmsResponse';
import FilmCard from '../src/components/FilmCard';
import '@testing-library/react-native/extend-expect';

describe('FilmCard tests', () => {
  const mockFilm: Film = {
    id: 'uniqueId',
    title: 'Film Title',
    description: 'A generic film description.',
    image: 'https://example.com/image.jpg',
  };

  it('should render correctly', () => {
    const {getByText} = render(<FilmCard film={mockFilm} />);
    expect(getByText(mockFilm.title)).toBeTruthy();
    expect(getByText(mockFilm.description)).toBeTruthy();
  });

  it('should truncate and add ellipsis to long descriptions', () => {
    const characters = 'abcdefg';
    let longDescription = '';
    for (let i = 0; i < 500; i++) {
      longDescription += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    const mockFilmWithLongDescription: Film = {
      ...mockFilm,
      description: longDescription,
    };

    const {getByText} = render(<FilmCard film={mockFilmWithLongDescription} />);
    expect(getByText(mockFilmWithLongDescription.title)).toBeTruthy();

    const truncatedDescription = getByText(/.*\.\.\./);
    expect(truncatedDescription).toBeTruthy();
    expect(truncatedDescription.children).not.toEqual(longDescription);
  });

  it('should render correctly in landscape mode', () => {
    //const mockScreenDimensions = {height: 500, width: 1000};
    //const useSelector = jest.fn();
    //useSelector.mockReturnValue(mockScreenDimensions);

    const {getByTestId} = render(<FilmCard film={mockFilm} />);
    expect(getByTestId('card')).toHaveStyle({flexDirection: 'row'});
  });
});
