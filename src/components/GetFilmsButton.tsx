import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Pressable, Text, StyleSheet} from 'react-native';
import {
  getFilms,
  toggleGetFilmsButtonIsPressed,
} from '../app/actions/actionCreators';
import {selectButtonIsPressed} from '../app/selectors/uiSelector';

const GetFilmsButton = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(getFilms());
  const handlePressIn = () => dispatch(toggleGetFilmsButtonIsPressed());
  const handlePressOut = () => dispatch(toggleGetFilmsButtonIsPressed());
  const buttonIsPressed = useSelector(selectButtonIsPressed);

  return (
    <Pressable
      style={[
        styles.getFilmsButton,
        buttonIsPressed
          ? styles.getFilmsButtonPressed
          : styles.getFilmsButtonReleased,
      ]}
      onPress={handleClick}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
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
