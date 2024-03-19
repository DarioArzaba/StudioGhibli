import React from 'react';
import FilmListConnectionSuccess from '../components/FilmListConnectionSuccess';
import FilmListConnectionFailed from '../components/FilmListConnectionFailed';
import {NetInfoState, useNetInfo} from '@react-native-community/netinfo';

const FilmListScreen = (): React.JSX.Element => {
  const netInfo: NetInfoState = useNetInfo();

  return netInfo.isConnected ? (
    <FilmListConnectionSuccess />
  ) : (
    <FilmListConnectionFailed />
  );
};

export default FilmListScreen;
