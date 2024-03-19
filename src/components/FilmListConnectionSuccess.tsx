import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  View,
  StyleSheet,
} from 'react-native';
import {
  getFilms,
  incrementFilmsScrollIndex,
} from '../app/actions/actionCreators';
import {
  areFilmsFetched,
  imageBackgroundURI,
  isDeviceAndroidOS,
} from '../utils/appLogic';
import {useDispatch, useSelector} from 'react-redux';
import FilmList from '../components/FilmList';
import {
  selectFilms,
  selectIsLoading,
  selectFilmsScrollIndex,
} from '../app/selectors/filmsSelector';
import {useTheme} from '../hooks/useTheme';
import ButtonGoBack from './ButtonGoBack';
import {useDeviceDimensions} from '../hooks/useDeviceDimensions';

const FilmListConnectionSuccess = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const films = useSelector(selectFilms);
  const isLoading = useSelector(selectIsLoading);
  const filmsIndex = useSelector(selectFilmsScrollIndex);
  const onLoadMoreFilms = () => dispatch(incrementFilmsScrollIndex());
  const {isDeviceInPortraitMode} = useDeviceDimensions();
  const {theme} = useTheme();

  useEffect(() => {
    const getFilmsOnMount = () => dispatch(getFilms());
    getFilmsOnMount();
  }, [dispatch]);

  const filmsFetched = areFilmsFetched(films);

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
                isDeviceInPortraitMode
                  ? portraitStyles.loadingIndicator
                  : landscapeStyles.loadingIndicator
              }
            />
          </View>
        )}
        {filmsFetched && !isLoading && (
          <View style={portraitStyles.filmListContainer}>
            <ButtonGoBack />
            <FilmList
              isPortrait={isDeviceInPortraitMode}
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
