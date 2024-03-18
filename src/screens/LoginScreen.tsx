import React from 'react';
import {ImageBackground, View, StyleSheet} from 'react-native';
import {imageBackgroundURI, isDeviceAndroidOS} from '../utils/appLogic';
import {useTheme} from '../hooks/useTheme';
import {useDeviceDimensions} from '../hooks/useDeviceDimensions';
import HomeFooter from '../components/HomeFooter';
import LoginCard from '../components/LoginCard';

const LoginScreen = (): React.JSX.Element => {
  const {isDeviceInPortraitMode} = useDeviceDimensions();
  const {theme} = useTheme();

  return (
    <View testID="HomeScreenContainer" style={portStyles.mainContainer}>
      <ImageBackground
        source={imageBackgroundURI(theme)}
        resizeMode="cover"
        blurRadius={!isDeviceAndroidOS ? 3 : undefined}
        style={portStyles.bgImage}>
        <View style={isDeviceInPortraitMode ? portStyles.hub : landStyles.hub}>
          <LoginCard titleKey="title" />
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
    marginTop: '40%',
  },
});

const landStyles = StyleSheet.create({
  hub: {
    marginTop: '0%',
  },
});

export default LoginScreen;
