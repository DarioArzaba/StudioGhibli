import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FilmListHeader = ({}: {}): React.JSX.Element => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Studio Ghibli Films</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#004156',
    borderBottomWidth: 1,
    borderBottomColor: 'darkgrey',
    height: 90,
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});

export default FilmListHeader;
