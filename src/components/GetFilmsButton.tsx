import React, {useState} from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import '../utils/i18n';

const GetFilmsButton = ({navigation}): React.JSX.Element => {
  const [isPressed, setIsPressed] = useState(false);

  const onLoadFilmsPressIn = () => setIsPressed(true);
  const onLoadFilmsPressOut = () => setIsPressed(false);
  const {t} = useTranslation();
  return (
    <Pressable
      accessibilityRole="button"
      style={[
        styles.getFilmsButton,
        isPressed
          ? styles.getFilmsButtonPressed
          : styles.getFilmsButtonReleased,
      ]}
      onPress={() => navigation.navigate('FilmList')}
      onPressIn={onLoadFilmsPressIn}
      onPressOut={onLoadFilmsPressOut}>
      <Text style={styles.getFilmsButtonText}>{t('get-films-button')}</Text>
    </Pressable>
  );
};

export const styles = StyleSheet.create({
  getFilmsButton: {
    marginTop: 40,
    marginBottom: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    fontFamily: 'inherit',
    backgroundColor: '#008080',
  },
  getFilmsButtonPressed: {
    backgroundColor: '#00A0A0',
  },
  getFilmsButtonReleased: {
    backgroundColor: '#008080',
  },
  getFilmsButtonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default GetFilmsButton;
