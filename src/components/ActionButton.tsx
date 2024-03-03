import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {getFilms} from '../app/actions/actionCreators';
import {Button, Pressable, Text} from 'react-native';
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
        styles.actionButtonGetFilms,
        isPressed
          ? styles.actionButtonGetFilmsPressed
          : styles.actionButtonGetFilmsReleased,
      ]}
      onPress={handleClick}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <Text>Get Films</Text>
    </Pressable>
  );
};

export const styles = StyleSheet.create({
  actionButtonGetFilms: {
    marginTop: 20,
    marginBottom: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    fontFamily: 'inherit',
    fontSize: 16,
    backgroundColor: '#008080',
  },
  actionButtonGetFilmsPressed: {
    backgroundColor: '#00A0A0',
  },
  actionButtonGetFilmsReleased: {
    backgroundColor: '#008080',
  },
});

export default ActionButton;
