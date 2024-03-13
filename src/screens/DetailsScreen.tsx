import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import {RootStackParamList} from '../navigation/NavProps';
import {RouteProp, useRoute} from '@react-navigation/native';
import GoBackButton from '../components/GoBackButton';

type DetailsRouteProp = RouteProp<RootStackParamList, 'Details'>;

const DetailsScreen = (): React.JSX.Element => {
  const route = useRoute<DetailsRouteProp>();
  const {filmInfo} = route.params;
  return (
    <View style={styles.detailsScreenContainer}>
      <GoBackButton />
      <View style={styles.container}>
        <Image
          style={styles.image}
          src={filmInfo?.image}
          alt={filmInfo?.title}
        />
        <Text style={styles.title}>{filmInfo?.title}</Text>
        <ScrollView>
          <View>
            <Text style={styles.movieInfoText}>
              Director: {filmInfo?.director}
            </Text>
            <Text style={styles.movieInfoScore}>
              Score: {filmInfo?.rt_score}
            </Text>
            <Text style={styles.movieInfoDescription}>
              {filmInfo?.description}
            </Text>
          </View>
        </ScrollView>
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
