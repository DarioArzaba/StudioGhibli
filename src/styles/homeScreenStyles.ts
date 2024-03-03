import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  homeScreenSafeArea: {
    flex: 1,
  },
  homeScreenScrollView: {
    flex: 1,
  },
  homeScreenImage: {
    width: '100%',
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
    margin: 0,
  },
  homeScreenContent: {
    flex: 1,
    minHeight: '100%',
    backgroundColor: 'lightblue',
  },
});
