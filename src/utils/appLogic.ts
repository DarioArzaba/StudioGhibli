import {Platform} from 'react-native';
import Film from '../models/FilmsResponse';
import FilmDetails from '../models/FilmDetails';

export const isDeviceAndroidOS = Platform.OS === 'android';

export const areFilmsFetched = (films: Film[]) => films && films.length !== 0;

export const getFilmFromId = (films: Film[], filmId: string): FilmDetails => {
  const film = films.find(filmMatch => filmMatch.id === filmId);
  if (!film) {
    throw new Error(`Film with ID ${filmId} not found.`);
  }
  return film;
};

export const imageBackgroundURI = (theme: string) => {
  switch (theme) {
    case 'default':
      return {
        uri: 'https://www.ghibli.jp/gallery/chihiro039.jpg',
      };
    case 'red':
      return {
        uri: 'https://www.ghibli.jp/gallery/chihiro048.jpg',
      };
    case 'blue':
      return {
        uri: 'https://www.ghibli.jp/gallery/kazetachinu024.jpg',
      };
    case 'green':
      return {
        uri: 'https://www.ghibli.jp/gallery/kaguyahime014.jpg',
      };
    default:
      return {
        uri: 'https://www.ghibli.jp/gallery/chihiro039.jpg',
      };
  }
};

export const getColorFromTheme = (theme: string) => {
  switch (theme) {
    case 'default':
      return {
        primaryColor: '#7b762a',
        secondaryColor: '#938b37',
      };
    case 'red':
      return {
        primaryColor: '#7b2a2a',
        secondaryColor: '#934837',
      };
    case 'blue':
      return {
        primaryColor: '#2a567b',
        secondaryColor: '#29606f',
      };
    case 'green':
      return {
        primaryColor: '#224f22',
        secondaryColor: '#2b732d',
      };
    default:
      return {
        primaryColor: '#7b762a',
        secondaryColor: '#938b37',
      };
  }
};
