import React, {useState, useRef} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, Animated} from 'react-native';

const BurgerMenuTwo = () => {
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

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.burgerButton, {elevation: menuVisible ? 4 : 2}]}
        onPress={toggleMenu}>
        <Text style={styles.burgerButtonText}>☰</Text>
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.menu,
          {
            transform: [{translateX: menuAnimation}],
            elevation: menuVisible ? 3 : 1,
          },
        ]}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Contact</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const menuTranslateX = menuAnimation.interpolate({
  inputRange: [0, 1],
  outputRange: [300, 0],
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  burgerButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
  },
  burgerButtonText: {
    fontSize: 24,
    color: '#333',
  },
  menu: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: 300,
    backgroundColor: '#f2f2f2',
    padding: 20,
    zIndex: 2,
    transform: [{translateX: menuTranslateX}],
  },
  menuItem: {
    padding: 10,
  },
  menuItemText: {
    fontSize: 18,
    color: '#333',
  },
});

export default BurgerMenuTwo;
