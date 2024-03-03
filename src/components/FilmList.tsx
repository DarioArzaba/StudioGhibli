import React from 'react';
import FilmCard from './FilmCard';
import {useSelector} from 'react-redux';
import {selectFilms} from '../app/selectors/filmsSelector';
import {FlatList, View} from 'react-native';
import Film from '../models/FilmsResponse';
import FilmListHeader from './FilmListHeader';

const FilmList = (): React.JSX.Element => {
  const films = useSelector(selectFilms);
  const filmCard = ({item}: {item: Film}) => (
    <FilmCard key={item.id} film={item} />
  );

  return (
    <View>
      <FilmListHeader />
      <FlatList
        data={films || []}
        renderItem={filmCard}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default FilmList;
