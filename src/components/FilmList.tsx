import React from 'react';
import {FlatList, View} from 'react-native';
import FilmListHeader from './FilmListHeader';
import FilmCard from './FilmCard';
import Film from '../models/FilmsResponse';

const FilmList = ({
  isPortrait,
  films,
  filmsIndex,
  onLoadMoreFilms,
  onLoadFilmsPress,
}: {
  isPortrait: boolean;
  films: Film[];
  filmsIndex: number;
  onLoadMoreFilms: () => void;
  onLoadFilmsPress: () => void;
}): React.JSX.Element => {
  const loadMoreFilms = () => {
    if (filmsIndex < films.length) {
      onLoadMoreFilms();
    }
  };

  const filmCard = ({item}: {item: Film}) => (
    <FilmCard key={item.id} film={item} isPortrait={isPortrait} />
  );

  return (
    <View testID="FilmListContainer">
      <FilmListHeader onLoadFilmsPress={onLoadFilmsPress} />
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

export default FilmList;
