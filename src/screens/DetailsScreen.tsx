import React, {useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Image,
  ScrollView,
} from 'react-native';
import {RootStackParamList} from '../navigation/NavProps';
import {RouteProp, useRoute} from '@react-navigation/native';
import ButtonGoBack from '../components/ButtonGoBack';
import {areFilmsFetched, getFilmFromId} from '../utils/appLogic';
import {getFilms} from '../app/actions/actionCreators';
import {useDispatch, useSelector} from 'react-redux';
import {selectFilms, selectIsLoading} from '../app/selectors/filmsSelector';

type DetailsRouteProp = RouteProp<RootStackParamList, 'Details'>;

const DetailsScreen = (): React.JSX.Element => {
  const route = useRoute<DetailsRouteProp>();
  const {filmIdNavProp} = route.params;

  const dispatch = useDispatch();
  const films = useSelector(selectFilms);
  const isLoading = useSelector(selectIsLoading);
  const filmsFetched = areFilmsFetched(films);

  useEffect(() => {
    const fetchFilmsIfNotLoaded = () => dispatch(getFilms());
    !filmsFetched && fetchFilmsIfNotLoaded();
  });

  const filmDetails = getFilmFromId(films, filmIdNavProp);

  return (
    <View style={styles.detailsScreenContainer}>
      <ButtonGoBack />
      <View style={styles.container}>
        {isLoading && <ActivityIndicator color="blue" size={'large'} />}
        {filmsFetched && !isLoading && (
          <View>
            <Image
              style={styles.image}
              src={filmDetails?.image}
              alt={filmDetails?.title}
            />
            <Text style={styles.title}>{filmDetails?.title}</Text>
            <ScrollView>
              <View>
                <Text style={styles.movieInfoText}>
                  Director: {filmDetails?.director}
                </Text>
                <Text style={styles.movieInfoScore}>
                  Score: {filmDetails?.rt_score}
                </Text>
                <Text style={styles.movieInfoDescription}>
                  {filmDetails?.description}
                </Text>
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsScreenContainer: {
    backgroundColor: 'white',
  },
  movieInfoScore: {
    marginVertical: 15,
    fontSize: 20,
    color: 'darkred',
  },
  movieInfoDescription: {
    marginVertical: 15,
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 200,
  },
  container: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 90,
  },
  profileSection: {
    marginBottom: 15,
  },
  movieInfoText: {
    marginBottom: 5,
    fontSize: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  picker: {
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 6,
    marginBottom: 30,
  },
});

export default DetailsScreen;
