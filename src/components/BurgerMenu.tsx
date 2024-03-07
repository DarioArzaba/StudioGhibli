import React, {useRef, useState} from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  View,
} from 'react-native';
import UserProfile from './UserProfile';

const BurgerMenu = (): React.JSX.Element => {
  const [isPressed, setIsPressed] = useState(false);
  const onLoadFilmsPressIn = () => setIsPressed(true);
  const onLoadFilmsPressOut = () => setIsPressed(false);

  const [menuVisible, setMenuVisible] = useState(false);
  const menuAnimation = useRef(new Animated.Value(0)).current;

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    Animated.timing(menuAnimation, {
      toValue: menuVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const menuTranslateX = menuAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [400, 0],
  });

  return (
    <View style={styles.container}>
      <Pressable
        accessibilityRole="button"
        style={[
          styles.getFilmsButton,
          isPressed
            ? styles.getFilmsButtonPressed
            : styles.getFilmsButtonReleased,
        ]}
        onPress={toggleMenu}
        onPressIn={onLoadFilmsPressIn}
        onPressOut={onLoadFilmsPressOut}>
        <Text style={styles.getFilmsButtonText}>☰</Text>
      </Pressable>
      <Animated.View
        style={[
          styles.menu,
          {
            transform: [{translateX: menuTranslateX}],
          },
        ]}>
        <UserProfile />
      </Animated.View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    zIndex: 1,
  },
  menu: {
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    width: '110%',
    top: 80,
    right: '100%',
    backgroundColor: '#f2f2f2',
    padding: 20,
    zIndex: 2,
  },
  getFilmsButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
    borderRadius: 5,
    fontFamily: 'inherit',
    fontSize: 34,
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
  menuItem: {
    padding: 10,
  },
  menuItemText: {
    fontSize: 18,
    color: '#333',
  },
});

export default BurgerMenu;
