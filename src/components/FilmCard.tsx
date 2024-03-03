import {Image, Text, View} from 'react-native';
import Film from '../models/FilmsResponse';
import React from 'react';
import {StyleSheet} from 'react-native';

const FilmCard = ({film}: {film: Film}): React.JSX.Element => {
  const truncate = (
    text: string,
    maxLength: number,
    ellipsis: string = '...',
  ): string => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength - ellipsis.length) + ellipsis;
  };

  const filmDescription = truncate(film.description, 428);

  return (
    <View style={styles.card}>
      <Image src={film.image} alt={film.title} style={styles.cardImage} />
      <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTitle}>{film.title}</Text>
      </View>
      <Text style={styles.cardDescription}>{filmDescription}</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
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

export default FilmCard;
