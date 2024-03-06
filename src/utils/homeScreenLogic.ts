import {Platform, ScaledSize} from 'react-native';
import Film from '../models/FilmsResponse';

export const areFilmsFetched = (films: Film[]) => films && films.length !== 0;
export const isDeviceInPortrait = (screen: ScaledSize) =>
  screen.height >= screen.width;

export const isDeviceAndroidOS = Platform.OS === 'android';
export const backgroundImageNoFilms = {
  uri: 'https://www.ghibli.jp/gallery/chihiro039.jpg',
};
export const backgroundImageFilms = {
  uri: 'https://www.ghibli.jp/gallery/kazetachinu024.jpg',
};
