import React from 'react';
import {ImageBackground, View, StyleSheet, Text} from 'react-native';
import {imageBackgroundURI, isDeviceAndroidOS} from '../utils/appLogic';
import FilmListHeader from '../components/FilmListHeader';
import {useTheme} from '../hooks/useTheme';
import {useTranslation} from 'react-i18next';
import '../utils/i18n';

const FilmListConnectionFailed = (): React.JSX.Element => {
  const {theme} = useTheme();
  const {t} = useTranslation();
  return (
    <View style={portraitStyles.safeAreaView}>
      <ImageBackground
        source={imageBackgroundURI(theme)}
        resizeMode="cover"
        blurRadius={!isDeviceAndroidOS ? 5 : undefined}
        style={portraitStyles.bgImage}>
        <View style={portraitStyles.fetchingFilmsContainer}>
          <FilmListHeader />
          <View style={portraitStyles.noConnectionContainer}>
            <Text style={portraitStyles.noConnectionText}>
              {t('no-connection')}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const portraitStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    alignItems: 'center',
  },
  loadingIndicator: {
    marginTop: '50%',
  },
  fetchingFilmsContainer: {
    width: '100%',
  },
  header: {
    marginTop: '70%',
  },
  noConnectionContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    paddingVertical: 40,
    paddingHorizontal: 30,
    backgroundColor: '#282c34c0',
    borderRadius: 10,
  },
  noConnectionText: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
  },
});

export default FilmListConnectionFailed;
