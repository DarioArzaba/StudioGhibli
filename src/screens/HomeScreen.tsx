import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {
  getFilms,
  incrementFilmsScrollIndex,
  updateOrientationState,
} from '../app/actions/actionCreators';
import {
  selectFilmsScrollIndex,
  selectScreenDimensions,
} from '../app/selectors/uiSelector';
import {
  areFilmsFetched,
  backgroundImageFilms,
  backgroundImageNoFilms,
  isDeviceAndroidOS,
  isDeviceInPortrait,
} from '../utils/homeScreenLogic';
import {useDispatch, useSelector} from 'react-redux';
import HomeScreenHeader from '../components/HomeScreenHeader';
import HomeScreenFooter from '../components/HomeScreenFooter';
import FilmList from '../components/FilmList';
import FilmListHeader from '../components/FilmListHeader';
import {selectFilms, selectIsLoading} from '../app/selectors/filmsSelector';
import BurgerMenu from '../components/BurgerMenu';

const HomeScreen = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const films = useSelector(selectFilms);
  const isLoading = useSelector(selectIsLoading);
  const screenDimensions = useSelector(selectScreenDimensions);
  const filmsIndex = useSelector(selectFilmsScrollIndex);
  const onLoadMoreFilms = () => dispatch(incrementFilmsScrollIndex());
  const onLoadFilmsPress = () => dispatch(getFilms());

  useEffect(() => {
    const updateDimensions = () => dispatch(updateOrientationState());
    const subscription = Dimensions.addEventListener(
      'change',
      updateDimensions,
    );
    return () => subscription.remove();
  });

  const filmsFetched = areFilmsFetched(films);
  const isPortrait = isDeviceInPortrait(screenDimensions);
  return (
    <SafeAreaView style={portraitStyles.safeAreaView}>
      <ImageBackground
        source={!filmsFetched ? backgroundImageNoFilms : backgroundImageFilms}
        resizeMode="cover"
        blurRadius={!isDeviceAndroidOS ? 5 : undefined}
        style={portraitStyles.bgImage}>
        {!filmsFetched && !isLoading && (
          <View
            style={isPortrait ? portraitStyles.header : landscapeStyles.header}>
            <HomeScreenHeader onLoadFilmsPress={onLoadFilmsPress} />
          </View>
        )}
        {isLoading && (
          <View style={portraitStyles.fetchingFilmsContainer}>
            <FilmListHeader onLoadFilmsPress={onLoadFilmsPress} />
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
          <View>
            <BurgerMenu />
            <FilmList
              isPortrait={isPortrait}
              films={films}
              filmsIndex={filmsIndex}
              onLoadMoreFilms={onLoadMoreFilms}
              onLoadFilmsPress={onLoadFilmsPress}
            />
          </View>
        )}
      </ImageBackground>
      {!filmsFetched && <HomeScreenFooter />}
    </SafeAreaView>
  );
};

const portraitStyles = StyleSheet.create({
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

export default HomeScreen;
