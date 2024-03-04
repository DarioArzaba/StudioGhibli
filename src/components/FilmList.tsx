import React from 'react';
import FilmCard from './FilmCard';
import {useDispatch, useSelector} from 'react-redux';
import {selectFilms} from '../app/selectors/filmsSelector';
import {FlatList, View} from 'react-native';
import Film from '../models/FilmsResponse';
import FilmListHeader from './FilmListHeader';
import {getFilms} from '../app/actions/actionCreators';

const FilmList = (): React.JSX.Element => {
  const films = useSelector(selectFilms);
  const filmCard = ({item}: {item: Film}) => (
    <FilmCard key={item.id} film={item} />
  );
  const dispatch = useDispatch();
  const loadMoreFilms = () => {
    dispatch(getFilms());
  };

  return (
    <View>
      <FilmListHeader />
      <FlatList
        data={films || []}
        renderItem={filmCard}
        keyExtractor={item => item.id}
        onEndReached={loadMoreFilms}
        onEndReachedThreshold={0.8}
      />
    </View>
  );
};

export default FilmList;
