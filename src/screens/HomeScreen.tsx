import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux';
import {selectFilms, selectIsLoading} from '../app/selectors/filmsSelector';
import HomeScreenHeader from '../components/HomeScreenHeader';
import HomeScreenFooter from '../components/HomeScreenFooter';
import FilmList from '../components/FilmList';
import FilmListHeader from '../components/FilmListHeader';

const HomeScreen = (): React.JSX.Element => {
  const [screen, setScreen] = useState(Dimensions.get('window'));
  const films = useSelector(selectFilms);
  const isLoading = useSelector(selectIsLoading);
  const backgroundImageOne = {
    uri: 'https://www.ghibli.jp/gallery/chihiro039.jpg',
  };
  const backgroundImageTwo = {
    uri: 'https://www.ghibli.jp/gallery/kazetachinu024.jpg',
  };

  const filmsFetched = films && films.length !== 0;

  useEffect(() => {
    const updateDimensions = () => setScreen(Dimensions.get('window'));
    const subscription = Dimensions.addEventListener(
      'change',
      updateDimensions,
    );

    return () => subscription.remove(); // Cleanup
  });
  const isPortrait = screen.height >= screen.width;

  return (
    <SafeAreaView style={portraitStyles.homeScreenSafeAreaView}>
      <ImageBackground
        source={filmsFetched ? backgroundImageTwo : backgroundImageOne}
        resizeMode="cover"
        blurRadius={5}
        style={portraitStyles.homeScreenBackgroundImage}>
        {!filmsFetched && (
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
          <View style={{width: '100%'}}>
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
  homeScreenHeader: {
    marginTop: '70%',
  },
});

const landscapeStyles = StyleSheet.create({
  homeScreenSafeAreaView: {
    flex: 1,
  },
  homeScreenBackgroundImage: {
    flex: 1,
    alignItems: 'center',
  },
  homeScreenLoadingIndicator: {
    marginTop: '20%',
  },
  homeScreenHeader: {
    marginTop: '10%',
  },
});

export default HomeScreen;
