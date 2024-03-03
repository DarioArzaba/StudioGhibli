import React from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  View,
} from 'react-native';
import {StyleSheet} from 'react-native';
import HomeScreenHeader from '../components/HomeScreenHeader';
import FilmList from '../components/FilmList';
import {useSelector} from 'react-redux';
import {selectFilms, selectIsLoading} from '../app/selectors/filmsSelector';
import HomeScreenFooter from '../components/HomeScreenFooter';

const HomeScreen = (): React.JSX.Element => {
  const films = useSelector(selectFilms);
  const isLoading = useSelector(selectIsLoading);
  const backgroundImage = {uri: 'https:www.ghibli.jp/gallery/chihiro039.jpg'};
  const filmsFetched = films && films.length !== 0;
  return (
    <SafeAreaView style={styles.homeScreenSafeAreaView}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.homeScreenBackgroundImage}>
        {!filmsFetched && (
          <View>
            <HomeScreenHeader />
          </View>
        )}
        {isLoading && (
          <ActivityIndicator style={styles.homeScreenLoadingIndicator} />
        )}
        {filmsFetched && !isLoading && <FilmList />}
      </ImageBackground>
      {!filmsFetched && <HomeScreenFooter />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  homeScreenSafeAreaView: {
    flex: 1,
    justifyContent: 'center',
  },
  homeScreenBackgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeScreenLoadingIndicator: {
    marginTop: '50%',
  },
});

export default HomeScreen;
