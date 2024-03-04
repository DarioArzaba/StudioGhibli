import {Image, Text, View} from 'react-native';
import Film from '../models/FilmsResponse';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {selectScreenDimensions} from '../app/selectors/uiSelector';

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

  const screenDimensions = useSelector(selectScreenDimensions);
  const isPortrait = screenDimensions?.height >= screenDimensions?.width;

  return (
    <View
      testID="card"
      style={isPortrait ? portraitStyles.card : landscapeStyles.card}>
      <Image
        src={film.image}
        alt={film.title}
        style={
          isPortrait ? portraitStyles.cardImage : landscapeStyles.cardImage
        }
      />
      <View
        style={
          isPortrait
            ? portraitStyles.cardDetailsContainer
            : landscapeStyles.cardDetailsContainer
        }>
        <View style={portraitStyles.cardTitleContainer}>
          <Text style={portraitStyles.cardTitle}>{film.title}</Text>
        </View>
        <Text style={portraitStyles.cardDescription}>{filmDescription}</Text>
      </View>
    </View>
  );
};

export const portraitStyles = StyleSheet.create({
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
  cardDetailsContainer: {
    flexDirection: 'column',
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

export const landscapeStyles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'center',
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
    width: '30%',
    aspectRatio: 1,
    resizeMode: 'contain',
    margin: 8,
  },
  cardDetailsContainer: {
    width: '70%',
    flexDirection: 'column',
  },
});

export default FilmCard;
