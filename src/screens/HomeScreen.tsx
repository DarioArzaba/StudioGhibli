import React, {useEffect} from 'react';
import {ImageBackground, View, StyleSheet, Dimensions} from 'react-native';
import {updateOrientationState} from '../app/actions/actionCreators';
import {selectScreenDimensions} from '../app/selectors/uiSelector';
import {
  imageBackgroundURI,
  isDeviceAndroidOS,
  isDeviceInPortrait,
} from '../utils/appLogic';
import {useDispatch, useSelector} from 'react-redux';
import HomeScreenHeader from '../components/HomeScreenHeader';
import {useTheme} from '../hooks/useTheme';
import HomeScreenFooter from '../components/HomeScreenFooter';
import {HomeScreenNavProps} from '../navigation/NavProps';
import {useNavigation} from '@react-navigation/native';
import GoBackButton from '../components/GoBackButton';

const HomeScreen = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const screenDimensions = useSelector(selectScreenDimensions);
  const {theme} = useTheme();

  useEffect(() => {
    const updateDimensions = () => dispatch(updateOrientationState());
    const subscription = Dimensions.addEventListener(
      'change',
      updateDimensions,
    );
    return () => subscription.remove();
  });
  const navigation = useNavigation<HomeScreenNavProps>();
  const state = navigation.getState();
  const isFirstScreen = state?.index === 0;
  const isPortrait = isDeviceInPortrait(screenDimensions);
  return (
    <View testID="HomeScreenContainer" style={portraitStyles.safeAreaView}>
      {!isFirstScreen && <GoBackButton />}
      <ImageBackground
        source={imageBackgroundURI(theme)}
        resizeMode="cover"
        blurRadius={!isDeviceAndroidOS ? 5 : undefined}
        style={portraitStyles.bgImage}>
        <View
          style={isPortrait ? portraitStyles.header : landscapeStyles.header}>
          <HomeScreenHeader />
        </View>
      </ImageBackground>
      <HomeScreenFooter />
    </View>
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
