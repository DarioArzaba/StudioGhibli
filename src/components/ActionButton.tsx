import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {getFilms} from '../app/actions/actionCreators';
import {Button, Pressable, Text} from 'react-native';
import {styles} from '../styles/homeScreenStyles';

const ActionButton = (): React.JSX.Element => {
  // Use redux
  const [isPressed, setIsPressed] = useState(false);
  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => setIsPressed(false);
  // Ask for action function getFilms()
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

export default ActionButton;
