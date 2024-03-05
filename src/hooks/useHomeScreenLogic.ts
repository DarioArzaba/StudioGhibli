import {useSelector} from 'react-redux';
import {selectScreenDimensions} from '../app/selectors/uiSelector';
import {selectFilms, selectIsLoading} from '../app/selectors/filmsSelector';
import {Platform} from 'react-native';

export const useHomeScreenLogic = () => {
  const films = useSelector(selectFilms);
  const isLoading = useSelector(selectIsLoading);
  const filmsFetched = films && films.length !== 0;
  const screenDimensions = useSelector(selectScreenDimensions);
  const isPortrait = screenDimensions.height >= screenDimensions.width;
  const bgNoFilmsFetched = {
    uri: 'https://www.ghibli.jp/gallery/chihiro039.jpg',
  };
  const bgFilmsFetched = {
    uri: 'https://www.ghibli.jp/gallery/kazetachinu024.jpg',
  };
  const isAndroid = Platform.OS === 'android';
  return {
    filmsFetched,
    isLoading,
    isPortrait,
    isAndroid,
    bgNoFilmsFetched,
    bgFilmsFetched,
  };
};
