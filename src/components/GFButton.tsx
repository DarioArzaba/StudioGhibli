import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/NavProps';

type GFButtonProps = {
  route?: keyof RootStackParamList;
  onClick?: () => void;
  text: string;
};

const GFButton = ({route, onClick, text}: GFButtonProps): React.JSX.Element => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleNavigation = () => {
    switch (route) {
      case 'Details':
        navigation.navigate(route, {filmIdNavProp: 'TODO: Pass also the id'});
        break;
      default:
        navigation.navigate(route);
    }
  };

  return (
    <TouchableOpacity
      onPress={route ? handleNavigation : onClick}
      style={styles.button}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5364fc',
    padding: 10,
    margin: 20,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default GFButton;
