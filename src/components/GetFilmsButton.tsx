import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {getFilms} from '../app/actions/actionCreators';
import {Pressable, Text} from 'react-native';
import {StyleSheet} from 'react-native';

const ActionButton = (): React.JSX.Element => {
  // Use redux?
  const [isPressed, setIsPressed] = useState(false);
  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => setIsPressed(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getFilms());
  };

  return (
    <Pressable
      style={[
        styles.getFilmsButton,
        isPressed
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

export default ActionButton;
