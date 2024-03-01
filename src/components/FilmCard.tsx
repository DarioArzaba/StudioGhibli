import {Image, Text, View} from 'react-native';
import Film from '../models/FilmsResponse';
import React from 'react';
import {styles} from '../styles/homeScreenStyles';

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

export default FilmCard;
