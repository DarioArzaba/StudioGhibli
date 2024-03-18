import React from 'react';
import FilmListConnectionSuccess from '../components/FilmListConnectionSuccess';
import FilmListConnectionFailed from '../components/FilmListConnectionFailed';
import {NetInfoState, useNetInfo} from '@react-native-community/netinfo';
import {useSelector} from 'react-redux';
import {selectUserAuth} from '../app/selectors/authSelector';

const FilmListScreen = (): React.JSX.Element => {
  const netInfo: NetInfoState = useNetInfo();
  const user = useSelector(selectUserAuth);
  console.log(user);

  return netInfo.isConnected ? (
    <FilmListConnectionSuccess />
  ) : (
    <FilmListConnectionFailed />
  );
};

export default FilmListScreen;
