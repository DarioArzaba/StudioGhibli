import {useNavigation} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import {FilmListNavProps} from '../navigation/NavProps';
import ReactNativeBiometrics from 'react-native-biometrics';

export const useBiometrics = () => {
  const navigation = useNavigation<FilmListNavProps>();
  const [biometricsAvailable, setBiometricsAvailable] = useState(false);
  const rnBiometrics = new ReactNativeBiometrics();

  const checkBiometricSupport = async () => {
    try {
      const {available} = await rnBiometrics.isSensorAvailable();
      available ? setBiometricsAvailable(true) : setBiometricsAvailable(false);
    } catch (error) {
      console.log(`Biometrics availability check failed: ${error}`);
      setBiometricsAvailable(false);
    }
  };

  useEffect(() => {
    checkBiometricSupport();
  });

  const loginWithBiometrics = async () => {
    try {
      const result = await rnBiometrics.simplePrompt({
        promptMessage: 'Confirmation',
      });
      if (result) {
        navigation.navigate('FilmList');
      }
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return {loginWithBiometrics, biometricsAvailable};
};
