import React, {useEffect} from 'react';
import {ImageBackground, View, StyleSheet, Dimensions} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {updateOrientationState} from '../app/actions/actionCreators';
import {selectScreenDimensions} from '../app/selectors/uiSelector';

import {
  imageBackgroundURI,
  isDeviceAndroidOS,
  isDeviceInPortrait,
} from '../utils/appLogic';
import {useTheme} from '../hooks/useTheme';
import HomeHub from '../components/HomeHub';
import Footer from '../components/Footer';

const HomeScreen = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const screenDimensions = useSelector(selectScreenDimensions);
  const isPortrait = isDeviceInPortrait(screenDimensions);
  const {theme} = useTheme();

  useEffect(() => {
    const updateDimensions = () => dispatch(updateOrientationState());
    const subscription = Dimensions.addEventListener(
      'change',
      updateDimensions,
    );
    return () => subscription.remove();
  });

  return (
    <View testID="HomeScreenContainer" style={portraitStyles.mainContainer}>
      <ImageBackground
        source={imageBackgroundURI(theme)}
        resizeMode="cover"
        blurRadius={!isDeviceAndroidOS ? 3 : undefined}
        style={portraitStyles.bgImage}>
        <View style={isPortrait ? portraitStyles.hub : landscapeStyles.hub}>
          <HomeHub />
        </View>
      </ImageBackground>
      <Footer textKey="home-footer" />
    </View>
  );
};

const portraitStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    alignItems: 'center',
  },
  hub: {
    marginTop: '70%',
  },
});

const landscapeStyles = StyleSheet.create({
  hub: {
    marginTop: '10%',
  },
});

export default HomeScreen;
