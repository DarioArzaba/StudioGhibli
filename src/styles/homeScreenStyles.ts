import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    flexDirection: 'column',
    padding: 20,
    backgroundColor: '#282c34',
  },
  headerText: {
    fontSize: 32,
    color: 'white',
  },
  footer: {
    padding: 10,
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#282c34',
  },
  footerText: {
    textAlign: 'center',
    color: 'white',
  },
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
  actionButtonGetFilms: {
    marginTop: 20,
    marginBottom: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    fontFamily: 'inherit',
    fontSize: 16,
    backgroundColor: '#008080',
  },
  actionButtonGetFilmsPressed: {
    backgroundColor: '#00A0A0',
  },
  actionButtonGetFilmsReleased: {
    backgroundColor: '#008080',
  },
  card: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 14,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#00334e',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 15,
    shadowOpacity: 1,
    shadowColor: 'rgba(0, 0, 0, 0.7)',
  },
  cardImage: {
    width: '75%',
    aspectRatio: 1,
    resizeMode: 'contain',
    margin: 8,
  },
  cardTitleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgreen',
  },
  cardTitle: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'center',
    color: 'white',
  },
  cardDescription: {
    fontSize: 12,
    marginTop: 5,
    padding: 10,
    textAlign: 'justify',
    color: 'white',
  },
});
