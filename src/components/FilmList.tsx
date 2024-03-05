import React, {useState} from 'react';
import FilmCard from './FilmCard';
import {useSelector} from 'react-redux';
import {selectFilms} from '../app/selectors/filmsSelector';
import {FlatList, View} from 'react-native';
import Film from '../models/FilmsResponse';
import FilmListHeader from './FilmListHeader';

const FilmList = (): React.JSX.Element => {
  const films = useSelector(selectFilms);
  const [currentIndex, setCurrentIndex] = useState(5);

  const filmCard = ({item}: {item: Film}) => (
    <FilmCard key={item.id} film={item} />
  );

  const loadMoreFilms = () => {
    if (currentIndex < films.length) {
      setCurrentIndex(currentIndex + 5);
    }
  };

  return (
    <View testID="FilmListContainer">
      <FilmListHeader />
      <FlatList
        data={films.slice(0, currentIndex) || []}
        renderItem={filmCard}
        keyExtractor={item => item.id}
        onEndReached={loadMoreFilms}
        onEndReachedThreshold={0.7}
      />
    </View>
  );
};

export default FilmList;
