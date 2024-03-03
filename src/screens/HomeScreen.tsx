import React from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {StyleSheet} from 'react-native';
import HomeScreenHeader from '../components/HomeScreenHeader';
import HomeScreenFooter from '../components/HomeScreenFooter';
import FilmList from '../components/FilmList';
import {useSelector} from 'react-redux';
import {selectFilms, selectIsLoading} from '../app/selectors/filmsSelector';

const HomeScreen = (): React.JSX.Element => {
  const films = useSelector(selectFilms);
  const isLoading = useSelector(selectIsLoading);
  const image = {uri: 'https:www.ghibli.jp/gallery/chihiro039.jpg'};

  let content;

  if (!films || films.length === 0) {
    content = <HomeScreenHeader />;
  } else if (isLoading) {
    content = <ActivityIndicator size="large" style={{marginTop: '50%'}} />;
  } else {
    content = (
      <ScrollView>
        <HomeScreenHeader />
        <FilmList />
        <HomeScreenFooter />
      </ScrollView>
    );
  }

  return (
    <SafeAreaView style={styles.homeScreenSafeAreaView}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.homeScreenBackgroundImage}>
        {content}
      </ImageBackground>
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
});

export default HomeScreen;
