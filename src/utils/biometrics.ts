import ReactNativeBiometrics from 'react-native-biometrics';
import {readData, storeData} from './asyncStorageManager';
import {FilmListNavProps} from '../navigation/NavProps';

const rnBiometrics = new ReactNativeBiometrics();

export const loginWithBiometrics = async (
  navigation: FilmListNavProps,
): Promise<void> => {
  try {
    const {success} = await rnBiometrics.simplePrompt({
      promptMessage: 'Confirmation',
    });
    const isUserAuthenticated = await isAuthenticated();
    if (isUserAuthenticated && success) {
      navigation.navigate('FilmList');
    }
  } catch (error) {
    console.error('Authentication error:', error);
  }
};

export const checkBiometricSupport = async (): Promise<boolean> => {
  try {
    const {available} = await rnBiometrics.isSensorAvailable();
    return available;
  } catch (error) {
    return false;
  }
};

const isAuthenticated = async (): Promise<boolean> => {
  try {
    if (!checkBiometricSupport()) {
      return false;
    }
    const keys = await checkIfKeyExists();
    if (keys) {
      const {success} = await createSignature();
      return success;
    }
  } catch (error) {
    return false;
  }
  return false;
};

const checkIfKeyExists = async (): Promise<string | undefined> => {
  try {
    const {keysExist} = await rnBiometrics.biometricKeysExist();
    if (!keysExist) {
      await registerUser();
    }
    const publicKey = await readData('biometricsPublicKey');
    if (publicKey) {
      return publicKey;
    }
  } catch (error) {
    console.error(`Retrieving public key error: ${error}`);
  }
};

const createSignature = async (): Promise<{
  success: boolean;
  signature?: string;
}> => {
  try {
    const time = new Date().getTime() / 1000;
    const createSignatureOptions = {
      promptMessage: 'Create signature',
      payload: `Signature date: ${time}`,
    };
    const {success, signature} = await rnBiometrics.createSignature(
      createSignatureOptions,
    );
    return {success, signature};
  } catch (error) {
    console.error(`Error creating signature: ${error}`);
    throw error;
  }
};

const registerUser = async (): Promise<void> => {
  try {
    const {publicKey} = await rnBiometrics.createKeys();
    //Hint: Send publicKey to server
    await storeData('biometricsPublicKey', publicKey);
  } catch (error) {
    console.error(`Error registering user: ${error}`);
    throw error;
  }
};
