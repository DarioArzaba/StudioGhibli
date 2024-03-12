import React from 'react';
import FilmListConnectionSuccess from '../components/FilmListConnectionSuccess';
import FilmListConnectionFailed from '../components/FilmListConnectionFailed';
import {NetInfoState, useNetInfo} from '@react-native-community/netinfo';

const FilmListScreen = (): React.JSX.Element => {
  const netInfo: NetInfoState = useNetInfo();
  console.log('FILM SCREEN TRIGGER connection is:', netInfo.isConnected);
  return netInfo.isConnected ? (
    <FilmListConnectionSuccess />
  ) : (
    <FilmListConnectionFailed />
  );
};

export default FilmListScreen;
