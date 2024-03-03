import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GetFilmsButton from './GetFilmsButton';

const FilmListHeader = (): React.JSX.Element => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Studio Ghibli Films</Text>
      <GetFilmsButton />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    margin: 'auto',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#004156',
    borderBottomWidth: 1,
    borderBottomColor: 'darkgrey',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

export default FilmListHeader;
