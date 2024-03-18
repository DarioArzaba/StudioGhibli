import React from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import Film from '../models/FilmsResponse';
import {truncateFilmDescription} from '../utils/filmCardLogic';
import {useTheme} from '../hooks/useTheme';
import {getColorFromTheme} from '../utils/appLogic';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/NavProps';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// TODO Add prop types
const FilmCard = ({
  filmId,
  film,
}: {
  filmId: string;
  film: Film;
}): React.JSX.Element => {
  const {theme} = useTheme();
  const color = getColorFromTheme(theme);
  const filmDescription = truncateFilmDescription(film.description, 60);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Details'>>();

  return (
    <TouchableWithoutFeedback
      style={styles.cardbutton}
      onPress={() => navigation.navigate('Details', {filmIdNavProp: filmId})}>
      <View
        testID="card"
        style={[styles.cardFilm, {backgroundColor: color.primaryColor}]}>
        <Image src={film.image} alt={film.title} style={styles.cardImage} />
        <View style={styles.cardDetailsContainer}>
          <View style={styles.cardTitleContainer}>
            <Text style={styles.cardTitle}>{film.title}</Text>
          </View>
          <Text style={styles.cardDescription}>{filmDescription}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export const styles = StyleSheet.create({
  cardTitleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgreen',
  },
  cardTitle: {
    fontSize: 20,
    marginVertical: 10,
    textAlign: 'left',
    color: 'white',
  },
  cardDescription: {
    fontSize: 18,
    marginTop: 5,
    textAlign: 'left',
    color: 'white',
  },
  cardbutton: {
    borderRadius: 8,
  },
  cardFilm: {
    flexDirection: 'row',
    alignContent: 'space-around',
    alignItems: 'flex-start',
    margin: 10,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#00334e',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 15,
    shadowOpacity: 1,
    shadowColor: 'rgba(0, 0, 0, 0.7)',
  },
  cardImage: {
    width: '30%',
    aspectRatio: 1,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  cardDetailsContainer: {
    width: '65%',
    flexDirection: 'column',
  },
});

export default FilmCard;
