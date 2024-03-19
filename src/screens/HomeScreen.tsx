import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {imageBackgroundURI, isDeviceAndroidOS} from '../utils/appLogic';
import {useTheme} from '../hooks/useTheme';
import Footer from '../components/Footer';
import HomeCard from '../components/HomeCard';
import {readData, storeObject} from '../utils/asyncStorageManager';
import {userSignUp} from '../app/actions/actionCreators';
import {useDispatch, useSelector} from 'react-redux';
import User from '../models/User';
import {selectUserAuth} from '../app/selectors/authSelector';

const HomeScreen = (): React.JSX.Element => {
  const {theme} = useTheme();
  return (
    <ImageBackground
      source={imageBackgroundURI(theme)}
      resizeMode="cover"
      blurRadius={!isDeviceAndroidOS ? 3 : undefined}
      style={portraitStyles.bgImage}>
      <HomeCard />
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

export default HomeScreen;
