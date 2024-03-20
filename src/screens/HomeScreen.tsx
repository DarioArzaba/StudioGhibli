import React from 'react';
import {ImageBackground, View, StyleSheet} from 'react-native';
import {imageBackgroundURI, isDeviceAndroidOS} from '../utils/appLogic';
import {useTheme} from '../hooks/useTheme';
import HomeHub from '../components/HomeHub';
import {useDeviceDimensions} from '../hooks/useDeviceDimensions';
import Footer from '../components/Footer';

const HomeScreen = (): React.JSX.Element => {
  const {isDeviceInPortraitMode} = useDeviceDimensions();

  const {theme} = useTheme();

  return (
    <View testID="HomeScreenContainer" style={portraitStyles.mainContainer}>
      <ImageBackground
        source={imageBackgroundURI(theme)}
        resizeMode="cover"
        blurRadius={!isDeviceAndroidOS ? 3 : undefined}
        style={portraitStyles.bgImage}>
        <View style={isDeviceInPortraitMode ? portraitStyles.hub : landscapeStyles.hub}>
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
