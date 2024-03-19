import React from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import '../utils/i18n';
import GFButton from './GFButton';
import {useDeviceDimensions} from '../hooks/useDeviceDimensions';
import {readData, storeObject} from '../utils/asyncStorageManager';
import {userSignOut} from '../app/actions/actionCreators';

const HomeCard = (): React.JSX.Element => {
  const {t} = useTranslation();
  const {isDeviceInPortraitMode} = useDeviceDimensions();
  const dispatch = useDispatch();

  const validateUserSignOut = async () => {
    //TODO: Validate that user matches stored one before dispatch
    const storedProfile = await readData('profile');
    if (storedProfile !== null) {
      const profile = JSON.parse(storedProfile);
      const updatedProfile = {...profile, isSignedIn: false};
      await storeObject('profile', updatedProfile);
    }
    dispatch(userSignOut());
  };

  return (
    <View
      style={
        isDeviceInPortraitMode
          ? portraitStyles.mainContainer
          : landscapeStyles.mainContainer
      }>
      <Text
        style={
          isDeviceInPortraitMode ? portraitStyles.title : landscapeStyles.title
        }>
        {t('title')}
      </Text>

      <View style={portraitStyles.section}>
        <GFButton textKey="get-films-button" route="FilmList" />
        <GFButton textKey="go-to-settings" route="UserProfile" />
        <GFButton textKey="sign-out-button" onClick={validateUserSignOut} />
      </View>
    </View>
  );
};

//TODO: Fix styles
const portraitStyles = StyleSheet.create({
  mainContainer: {
    width: 300,
    padding: 40,
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    backgroundColor: '#108e71ff',
    borderRadius: 15,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 100,
    shadowOpacity: 1,
    shadowColor: 'rgba(0, 0, 0, 1)',
  },
  title: {
    fontSize: 28,
    paddingBottom: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textInput: {
    width: '100%',
    height: 40,
    marginVertical: 10,
    marginHorizontal: 30,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  section: {
    width: '100%',
  },
  biometricsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  biometricsDescription: {
    fontSize: 16,
    color: 'lightgrey',
    textAlign: 'center',
  },
  biometricsSwitch: {
    transform: [{scale: 0.8}],
    marginLeft: 5,
  },
});

const landscapeStyles = StyleSheet.create({
  mainContainer: {
    width: 300,
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    backgroundColor: '#108e71ff',
    borderRadius: 15,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 100,
    shadowOpacity: 1,
    shadowColor: 'rgba(0, 0, 0, 1)',
  },
  title: {
    fontSize: 24,
    paddingBottom: 10,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  biometricsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeCard;
