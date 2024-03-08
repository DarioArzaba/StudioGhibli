import {Platform, ScaledSize} from 'react-native';
import Film from '../models/FilmsResponse';

export const isDeviceAndroidOS = Platform.OS === 'android';

export const isDeviceInPortrait = (screen: ScaledSize) =>
  screen.height >= screen.width;

export const areFilmsFetched = (films: Film[]) => films && films.length !== 0;

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
      return {primaryColor: '#428bca', secondaryColor: '#5bc0de'};
    case 'red':
      return {primaryColor: '#428bca', secondaryColor: '#5bc0de'};
    case 'blue':
      return {primaryColor: '#428bca', secondaryColor: '#5bc0de'};
    case 'green':
      return {primaryColor: '#428bca', secondaryColor: '#5bc0de'};
    default:
      return {primaryColor: '#428bca', secondaryColor: '#5bc0de'};
  }
};
