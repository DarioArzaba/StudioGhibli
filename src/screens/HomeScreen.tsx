import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {updateOrientationState} from '../app/actions/actionCreators';
import {useHomeScreenLogic} from '../hooks/useHomeScreenLogic';
import HomeScreenHeader from '../components/HomeScreenHeader';
import HomeScreenFooter from '../components/HomeScreenFooter';
import FilmList from '../components/FilmList';
import FilmListHeader from '../components/FilmListHeader';

const HomeScreen = (): React.JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    const updateDimensions = () => dispatch(updateOrientationState());
    const subscription = Dimensions.addEventListener(
      'change',
      updateDimensions,
    );
    return () => subscription.remove();
  });

  const {
    filmsFetched,
    isLoading,
    isPortrait,
    isAndroid,
    bgNoFilmsFetched,
    bgFilmsFetched,
  } = useHomeScreenLogic();

  return (
    <SafeAreaView style={portraitStyles.safeAreaView}>
      <ImageBackground
        source={!filmsFetched ? bgNoFilmsFetched : bgFilmsFetched}
        resizeMode="cover"
        blurRadius={!isAndroid ? 5 : undefined}
        style={portraitStyles.bgImage}>
        {!filmsFetched && !isLoading && (
          <View
            style={isPortrait ? portraitStyles.header : landscapeStyles.header}>
            <HomeScreenHeader />
          </View>
        )}
        {isLoading && (
          <View style={portraitStyles.fetchingFilmsContainer}>
            <FilmListHeader />
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
        {filmsFetched && !isLoading && <FilmList />}
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
