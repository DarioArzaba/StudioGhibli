import React from 'react';
import {Pressable, Text, StyleSheet} from 'react-native';

const GetFilmsButton = ({
  buttonIsPressed,
  onLoadFilmsPress,
  onLoadFilmsPressIn,
  onLoadFilmsPressOut,
}: {
  buttonIsPressed: boolean;
  onLoadFilmsPress: () => void;
  onLoadFilmsPressIn: () => void;
  onLoadFilmsPressOut: () => void;
}): React.JSX.Element => {
  return (
    <Pressable
      accessibilityRole="button"
      style={[
        styles.getFilmsButton,
        buttonIsPressed
          ? styles.getFilmsButtonPressed
          : styles.getFilmsButtonReleased,
      ]}
      onPress={onLoadFilmsPress}
      onPressIn={onLoadFilmsPressIn}
      onPressOut={onLoadFilmsPressOut}>
      <Text style={styles.getFilmsButtonText}>Get Films</Text>
    </Pressable>
  );
};

export const styles = StyleSheet.create({
  getFilmsButton: {
    marginTop: 20,
    marginBottom: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    fontFamily: 'inherit',
    fontSize: 16,
    backgroundColor: '#008080',
  },
  getFilmsButtonPressed: {
    backgroundColor: '#00A0A0',
  },
  getFilmsButtonReleased: {
    backgroundColor: '#008080',
  },
  getFilmsButtonText: {
    color: 'white',
  },
});

export default GetFilmsButton;
