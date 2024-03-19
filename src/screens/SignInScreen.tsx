import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {imageBackgroundURI, isDeviceAndroidOS} from '../utils/appLogic';
import {useTheme} from '../hooks/useTheme';
import LoginCard from '../components/LoginCard';
import Footer from '../components/Footer';
import {readData, storeObject} from '../utils/asyncStorageManager';
import User from '../models/User';
import {useDispatch} from 'react-redux';
import {userSignUp} from '../app/actions/actionCreators';

const SignInScreen = (): React.JSX.Element => {
  const {theme} = useTheme();

  return (
    <ImageBackground
      source={imageBackgroundURI(theme)}
      resizeMode="cover"
      blurRadius={!isDeviceAndroidOS ? 3 : undefined}
      style={portraitStyles.bgImage}>
      <LoginCard titleKey="title" />
      <Footer textKey="home-footer" />
    </ImageBackground>
  );
};

const portraitStyles = StyleSheet.create({
  bgImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hub: {
    marginTop: '40%',
  },
});

export default SignInScreen;
