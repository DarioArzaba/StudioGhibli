import React from 'react';
import {useConnectionStatus} from '../utils/networkUtils';
import FilmListConnectionSuccess from '../components/FilmListConnectionSuccess';
import FilmListConnectionFailed from '../components/FilmListConnectionFailed';

const FilmListScreen = ({navigation}): React.JSX.Element => {
  const isConnected = useConnectionStatus();
  console.log('FILM SCREEN TRIGGER connection is:', isConnected);
  return isConnected ? (
    <FilmListConnectionSuccess />
  ) : (
    <FilmListConnectionFailed navigation={navigation} />
  );
};

export default FilmListScreen;
