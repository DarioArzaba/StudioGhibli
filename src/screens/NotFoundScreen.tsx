import React from 'react';
import {ImageBackground, View, StyleSheet, Text} from 'react-native';
import {imageBackgroundURI, isDeviceAndroidOS} from '../utils/appLogic';
import {useTheme} from '../hooks/useTheme';
import {useTranslation} from 'react-i18next';
import '../utils/i18n';
import GFButton from '../components/GFButton';
import {useSelector} from 'react-redux';
import {selectUserAuth} from '../app/selectors/authSelector';

const NotFoundScreen = (): React.JSX.Element => {
  const {theme} = useTheme();
  const {t} = useTranslation();
  const user = useSelector(selectUserAuth);
  return (
    <View style={portStyles.safeAreaView}>
      <ImageBackground
        source={imageBackgroundURI(theme)}
        resizeMode="cover"
        blurRadius={!isDeviceAndroidOS ? 5 : undefined}
        style={portStyles.bgImage}>
        <View style={portStyles.fetchingFilmsContainer}>
          {user && user.isSignedIn ? (
            <View style={portStyles.noConnectionContainer}>
              <Text style={portStyles.noConnectionText}>404 Not Found.</Text>
              <GFButton text="Home" route="Home" />
            </View>
          ) : (
            <View style={portStyles.noConnectionContainer}>
              <Text style={portStyles.noConnectionText}>
                404 Not Found. Sign in first.
              </Text>
              <GFButton text="Sign In" route="Login" />
            </View>
          )}
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

export default NotFoundScreen;
