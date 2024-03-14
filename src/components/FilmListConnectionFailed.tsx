import React from 'react';
import {
  ImageBackground,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {imageBackgroundURI, isDeviceAndroidOS} from '../utils/appLogic';
import {useTheme} from '../hooks/useTheme';
import {useTranslation} from 'react-i18next';
import '../utils/i18n';
import {FilmListNavProps} from '../navigation/NavProps';
import {useNavigation} from '@react-navigation/native';

const FilmListConnectionFailed = (): React.JSX.Element => {
  const navigation = useNavigation<FilmListNavProps>();

  const {theme} = useTheme();
  const {t} = useTranslation();
  return (
    <View style={portStyles.safeAreaView}>
      <ImageBackground
        source={imageBackgroundURI(theme)}
        resizeMode="cover"
        blurRadius={!isDeviceAndroidOS ? 5 : undefined}
        style={portStyles.bgImage}>
        <View style={portStyles.fetchingFilmsContainer}>
          <View style={portStyles.noConnectionContainer}>
            <Text style={portStyles.noConnectionText}>
              {t('no-connection')}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.popToTop()}
              style={portStyles.homeButton}>
              <Text style={portStyles.homeButtonText}>Go to Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const portStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  homeButtonText: {
    fontSize: 20,
    color: 'white',
  },
  homeButton: {
    marginTop: 40,
    marginBottom: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    fontFamily: 'inherit',
    backgroundColor: '#008080',
  },
});

export default FilmListConnectionFailed;
