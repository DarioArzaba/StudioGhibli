import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ButtonGoBack = (): React.JSX.Element => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.backButton}>
      <Text style={styles.backButtonText}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: 55,
    left: 20,
    backgroundColor: '#ddd',
    zIndex: 5,
    width: 80,
    alignItems: 'center',
    padding: 10,
  },
  backButtonText: {
    fontWeight: 'bold',
  },
});

export default ButtonGoBack;
