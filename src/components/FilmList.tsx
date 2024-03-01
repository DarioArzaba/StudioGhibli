import React from 'react';
import FilmCard from './FilmCard';
import {useSelector} from 'react-redux';
import {selectFilms} from '../app/selectors/filmsSelector';
import {View} from 'react-native';

const FilmList = (): React.JSX.Element => {
  const films = useSelector(selectFilms);
  return (
    <View>
      {films && films.map(film => <FilmCard key={film.id} film={film} />)}
    </View>
  );
};

export default FilmList;
