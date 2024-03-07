import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  View,
} from 'react-native';
import UserProfile from './UserProfile';
import {readData, storeData} from '../utils/PersistanceManager';

const BurgerMenu = (): React.JSX.Element => {
  const [menuVisible, setMenuVisible] = useState(false);
  const menuAnimation = useRef(new Animated.Value(0)).current;
  const [theme, setTheme] = useState('');
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    Animated.timing(menuAnimation, {
      toValue: menuVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const nullToEmptyString = (value: string | null): string => {
    return value === null ? '' : value;
  };
  useEffect(() => {
    const fetchTheme = async () => {
      const currentTheme = await readData('color');
      if (!currentTheme) {
        await storeData('color', 'lightred');
        const defaultTheme = await readData('color');
        setTheme(nullToEmptyString(defaultTheme));
      } else {
        setTheme(nullToEmptyString(currentTheme));
      }
    };
    fetchTheme();
  }, []);

  const menuTranslateX = menuAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [400, 0],
  });

  return (
    <View style={styles.container}>
      <Pressable
        accessibilityRole="button"
        style={[styles.menuButton]}
        onPress={toggleMenu}>
        <Text style={styles.menuButtonText}>☰</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    width: '110%',
    height: 500,
    top: 80,
    right: '100%',
    zIndex: 2,
    backgroundColor: 'white',
  },
  menuButton: {
    position: 'absolute',
    top: 30,
    left: 30,
    zIndex: 1,
    borderRadius: 5,
    fontFamily: 'inherit',
    fontSize: 34,
  },
  menuButtonText: {
    fontSize: 34,
    color: 'white',
  },
  menuItem: {
    padding: 10,
    marginVertical: 100,
  },
  menuItemText: {
    fontSize: 18,
    color: '#333',
  },
});

export default BurgerMenu;
