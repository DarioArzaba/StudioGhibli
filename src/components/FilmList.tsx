import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import FilmCard from './FilmCard';
import Film from '../models/FilmsResponse';

const FilmList = ({
  films,
  filmsIndex,
  onLoadMoreFilms,
}: {
  isPortrait: boolean;
  films: Film[];
  filmsIndex: number;
  onLoadMoreFilms: () => void;
}): React.JSX.Element => {
  const loadMoreFilms = () => {
    if (filmsIndex < films.length) {
      onLoadMoreFilms();
    }
  };

  const filmCard = ({item}: {item: Film}) => (
    <FilmCard filmId={item.id} film={item} />
  );

  return (
    <View testID="FilmListContainer" style={styles.container}>
      <FlatList
        data={films.slice(0, filmsIndex) || []}
        renderItem={filmCard}
        keyExtractor={item => item.id}
        onEndReached={loadMoreFilms}
        onEndReachedThreshold={0.7}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 110,
  },
});

export default FilmList;
