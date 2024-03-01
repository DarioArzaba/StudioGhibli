import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ActionButton from './ActionButton';

const HomeScreenHeader = (): React.JSX.Element => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Studio Ghibli Films</Text>
    <ActionButton />
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    flexDirection: 'column',
    paddingTop: 40,
    paddingHorizontal: 10,
    backgroundColor: '#282c34c0',
    borderRadius: 10,
  },
  headerText: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
  },
});

export default HomeScreenHeader;
