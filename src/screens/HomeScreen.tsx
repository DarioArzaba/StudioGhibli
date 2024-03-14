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
import HomeFooter from '../components/HomeFooter';

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
    <View testID="HomeScreenContainer" style={portStyles.mainContainer}>
      <ImageBackground
        source={imageBackgroundURI(theme)}
        resizeMode="cover"
        blurRadius={!isDeviceAndroidOS ? 3 : undefined}
        style={portStyles.bgImage}>
        <View style={isPortrait ? portStyles.hub : landStyles.hub}>
          <HomeHub />
        </View>
      </ImageBackground>
      <HomeFooter />
    </View>
  );
};

const portStyles = StyleSheet.create({
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

const landStyles = StyleSheet.create({
  hub: {
    marginTop: '10%',
  },
});

export default HomeScreen;
