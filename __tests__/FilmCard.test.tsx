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
    const {getByText} = render(<FilmCard film={mockFilm} isPortrait={true} />);
    expect(getByText(mockFilm.title)).toBeTruthy();
    expect(getByText(mockFilm.description)).toBeTruthy();
  });

  it('should truncate and add ellipsis to long descriptions', () => {
    let longDescription =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Fringilla phasellus faucibus scelerisque eleifend donec. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Massa tempor nec feugiat nisl pretium fusce. Ullamcorper a lacus vestibulum sed. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Est ante in nibh mauris cursus mattis molestie. Mollis nunc sed id semper risus in hendrerit. Etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Diam vel quam elementum pulvinar. Id donec ultrices tincidunt arcu non sodales neque. Ligula ullamcorper malesuada proin libero nunc consequat. Pretium nibh ipsum consequat nisl vel pretium lectus. Nunc sed id semper risus in hendrerit gravida rutrum. Et netus et malesuada fames ac turpis egestas sed tempus. Ac turpis egestas sed tempus urna et.';
    const mockFilmWithLongDescription: Film = {
      ...mockFilm,
      description: longDescription,
    };

    const {getByText} = render(
      <FilmCard film={mockFilmWithLongDescription} isPortrait={false} />,
    );
    expect(getByText(mockFilmWithLongDescription.title)).toBeTruthy();
    const truncatedDescription = getByText(/.*\.\.\./);
    expect(truncatedDescription).toBeTruthy();
    expect(truncatedDescription.children).not.toEqual(longDescription);
  });
});
