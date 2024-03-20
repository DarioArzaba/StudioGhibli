import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {useTranslation} from 'react-i18next';
import '../utils/i18n';
import GFButton from './GFButton';
import User from '../models/User';
import {signOutUser} from '../app/actions/actionCreators';
import {useDispatch} from 'react-redux';

const HomeHub = (): React.JSX.Element => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const mockUser: User = {
    isSignedIn: false,
    name: 'Dar',
    email: 'dar@gmail.com',
    theme: 'green',
    language: 'en',
  };

  const userSignOut = () => {
    //TODO: User auth validation
    dispatch(signOutUser(mockUser));
  };

  return (
    <View testID="HeaderContainer" style={styles.header}>
      <Text style={styles.headerText}>{t('title')}</Text>
      <GFButton textKey="get-films-button" route="FilmList" />
      <GFButton textKey="go-to-settings" route="UserProfile" />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    paddingTop: 40,
    paddingHorizontal: 30,
    backgroundColor: '#282c34c0',
    borderRadius: 10,
  },
  headerText: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
  },
});

export default HomeHub;
