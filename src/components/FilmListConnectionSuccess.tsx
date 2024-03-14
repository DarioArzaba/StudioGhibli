import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  getFilms,
  incrementFilmsScrollIndex,
  updateOrientationState,
} from '../app/actions/actionCreators';
import {selectScreenDimensions} from '../app/selectors/uiSelector';
import {
  areFilmsFetched,
  imageBackgroundURI,
  isDeviceAndroidOS,
  isDeviceInPortrait,
} from '../utils/appLogic';
import {useDispatch, useSelector} from 'react-redux';
import FilmList from '../components/FilmList';
import {
  selectFilms,
  selectIsLoading,
  selectFilmsScrollIndex,
} from '../app/selectors/filmsSelector';
import {useTheme} from '../hooks/useTheme';
import GoBackButton from './GoBackButton';

const FilmListConnectionSuccess = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const films = useSelector(selectFilms);
  const isLoading = useSelector(selectIsLoading);
  const screenDimensions = useSelector(selectScreenDimensions);
  const filmsIndex = useSelector(selectFilmsScrollIndex);
  const onLoadMoreFilms = () => dispatch(incrementFilmsScrollIndex());
  const {theme} = useTheme();

  useEffect(() => {
    const getFilmsOnMount = () => dispatch(getFilms());
    const updateDimensions = () => dispatch(updateOrientationState());
    const subscription = Dimensions.addEventListener(
      'change',
      updateDimensions,
    );
    getFilmsOnMount();
    return () => subscription.remove();
  }, [dispatch]);

  const filmsFetched = areFilmsFetched(films);
  const isPortrait = isDeviceInPortrait(screenDimensions);

  return (
    <View style={portraitStyles.safeAreaView}>
      <ImageBackground
        source={imageBackgroundURI(theme)}
        resizeMode="cover"
        blurRadius={!isDeviceAndroidOS ? 5 : undefined}
        style={portraitStyles.bgImage}>
        {isLoading && (
          <View style={portraitStyles.fetchingFilmsContainer}>
            <ActivityIndicator
              color="blue"
              size={'large'}
              style={
                isPortrait
                  ? portraitStyles.loadingIndicator
                  : landscapeStyles.loadingIndicator
              }
            />
          </View>
        )}
        {filmsFetched && !isLoading && (
          <View style={portraitStyles.filmListContainer}>
            <GoBackButton />
            <FilmList
              isPortrait={isPortrait}
              films={films}
              filmsIndex={filmsIndex}
              onLoadMoreFilms={onLoadMoreFilms}
            />
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

const portraitStyles = StyleSheet.create({
  filmListContainer: {
    width: '100%',
  },
  safeAreaView: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    alignItems: 'center',
  },
  loadingIndicator: {
    marginTop: '50%',
  },
  fetchingFilmsContainer: {
    width: '100%',
  },
  header: {
    marginTop: '70%',
  },
});

const landscapeStyles = StyleSheet.create({
  loadingIndicator: {
    marginTop: '20%',
  },
  header: {
    marginTop: '10%',
  },
});

export default FilmListConnectionSuccess;
