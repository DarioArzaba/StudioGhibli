import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../hooks/useTheme';
import {getColorFromTheme} from '../utils/appLogic';

const FilmListHeader = (): React.JSX.Element => {
  const {theme} = useTheme();
  const color = getColorFromTheme(theme);
  return (
    <View style={[styles.header, {backgroundColor: color.secondaryColor}]}>
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
    paddingTop: 45,
    paddingHorizontal: 10,
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
