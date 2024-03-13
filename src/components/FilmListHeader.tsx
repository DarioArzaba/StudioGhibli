import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../hooks/useTheme';
import {getColorFromTheme} from '../utils/appLogic';
import {useTranslation} from 'react-i18next';
import '../utils/i18n';

const FilmListHeader = (): React.JSX.Element => {
  const {theme} = useTheme();
  const color = getColorFromTheme(theme);
  const {t} = useTranslation();

  return (
    <View
      testID="HeaderTitle"
      style={[styles.header, {backgroundColor: color.secondaryColor}]}>
      <Text style={styles.headerText}>{t('title')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
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
