import {Platform, ScaledSize} from 'react-native';
import Film from '../models/FilmsResponse';

export const areFilmsFetched = (films: Film[]) => films && films.length !== 0;
export const isDeviceInPortrait = (screen: ScaledSize) =>
  screen.height >= screen.width;
export const imageBackgroundURI = (theme: string) => {
  if (theme === 'default') {
    return backgroundImageDefault;
  } else if (theme === 'red') {
    return backgroundImageRed;
  } else if (theme === 'blue') {
    return backgroundImageBlue;
  } else if (theme === 'green') {
    return backgroundImageGreen;
  }
};
export const isDeviceAndroidOS = Platform.OS === 'android';
export const backgroundImageDefault = {
  uri: 'https://www.ghibli.jp/gallery/chihiro039.jpg',
};
export const backgroundImageBlue = {
  uri: 'https://www.ghibli.jp/gallery/kazetachinu024.jpg',
};
export const backgroundImageGreen = {
  uri: 'https://www.ghibli.jp/gallery/kaguyahime014.jpg',
};
export const backgroundImageRed = {
  uri: 'https://www.ghibli.jp/gallery/chihiro048.jpg',
};
