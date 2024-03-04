import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectFilms, selectIsLoading} from '../app/selectors/filmsSelector';
import HomeScreenHeader from '../components/HomeScreenHeader';
import HomeScreenFooter from '../components/HomeScreenFooter';
import FilmList from '../components/FilmList';
import FilmListHeader from '../components/FilmListHeader';
import {selectScreenDimensions} from '../app/selectors/uiSelector';
import {updateOrientationState} from '../app/actions/actionCreators';

const HomeScreen = (): React.JSX.Element => {
  const films = useSelector(selectFilms);
  const isLoading = useSelector(selectIsLoading);
  const screenDimensions = useSelector(selectScreenDimensions);
  const dispatch = useDispatch();
  useEffect(() => {
    const updateDimensions = () => dispatch(updateOrientationState());
    const subscription = Dimensions.addEventListener(
      'change',
      updateDimensions,
    );
    return () => subscription.remove();
  });

  const backgroundImageOne = {
    uri: 'https://www.ghibli.jp/gallery/chihiro039.jpg',
  };
  const backgroundImageTwo = {
    uri: 'https://www.ghibli.jp/gallery/kazetachinu024.jpg',
  };

  const filmsFetched = films && films.length !== 0;
  const isPortrait = screenDimensions.height >= screenDimensions.width;

  return (
    <SafeAreaView style={portraitStyles.homeScreenSafeAreaView}>
      <ImageBackground
        source={filmsFetched ? backgroundImageTwo : backgroundImageOne}
        resizeMode="cover"
        blurRadius={5}
        style={portraitStyles.homeScreenBackgroundImage}>
        {!filmsFetched && !isLoading && (
          <View
            style={
              isPortrait
                ? portraitStyles.homeScreenHeader
                : landscapeStyles.homeScreenHeader
            }>
            <HomeScreenHeader />
          </View>
        )}
        {isLoading && (
          <View style={portraitStyles.loadingFilmsContainer}>
            <FilmListHeader />
            <ActivityIndicator
              color="blue"
              size={'large'}
              style={
                isPortrait
                  ? portraitStyles.homeScreenLoadingIndicator
                  : landscapeStyles.homeScreenLoadingIndicator
              }
            />
          </View>
        )}
        {filmsFetched && !isLoading && (
          <View>
            <FilmList />
          </View>
        )}
      </ImageBackground>
      {!filmsFetched && <HomeScreenFooter />}
    </SafeAreaView>
  );
};

const portraitStyles = StyleSheet.create({
  homeScreenSafeAreaView: {
    flex: 1,
  },
  homeScreenBackgroundImage: {
    flex: 1,
    alignItems: 'center',
  },
  homeScreenLoadingIndicator: {
    marginTop: '50%',
  },
  loadingFilmsContainer: {
    width: '100%',
  },
  homeScreenHeader: {
    marginTop: '70%',
  },
});

const landscapeStyles = StyleSheet.create({
  homeScreenLoadingIndicator: {
    marginTop: '20%',
  },
  homeScreenHeader: {
    marginTop: '10%',
  },
});

export default HomeScreen;
