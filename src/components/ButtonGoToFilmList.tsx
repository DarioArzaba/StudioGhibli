import React, {useState} from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import '../utils/i18n';
import {useNavigation} from '@react-navigation/native';
import {FilmListNavProps} from '../navigation/NavProps';

const ButtonGoToFilmList = (): React.JSX.Element => {
  const [isPressed, setIsPressed] = useState(false);

  const {t} = useTranslation();
  const navigation = useNavigation<FilmListNavProps>();

  const onLoadFilmsPressIn = () => setIsPressed(true);
  const onLoadFilmsPressOut = () => setIsPressed(false);
  return (
    <Pressable
      testID="ButtonGoToFilmList"
      accessibilityRole="button"
      style={[
        styles.ButtonGoToFilmList,
        isPressed
          ? styles.ButtonGoToFilmListPressed
          : styles.ButtonGoToFilmListReleased,
      ]}
      onPress={() => navigation.navigate('FilmList')}
      onPressIn={onLoadFilmsPressIn}
      onPressOut={onLoadFilmsPressOut}>
      <Text style={styles.ButtonGoToFilmListText}>{t('get-films-button')}</Text>
    </Pressable>
  );
};

export const styles = StyleSheet.create({
  ButtonGoToFilmList: {
    marginTop: 40,
    marginBottom: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    fontFamily: 'inherit',
    backgroundColor: '#008080',
  },
  ButtonGoToFilmListPressed: {
    backgroundColor: '#00A0A0',
  },
  ButtonGoToFilmListReleased: {
    backgroundColor: '#008080',
  },
  ButtonGoToFilmListText: {
    fontSize: 16,
    color: 'white',
  },
});

export default ButtonGoToFilmList;
