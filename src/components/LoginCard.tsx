import React, {useEffect, useState} from 'react';
import {StyleSheet, Switch, Text, TextInput, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import '../utils/i18n';
import GFButton from './GFButton';
import {readData, storeData, updateData} from '../utils/asyncStorageManager';
import {useBiometrics} from '../hooks/useBiometrics';

const LoginCard = ({titleKey}: {titleKey: string}): React.JSX.Element => {
  const {t} = useTranslation();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const {loginWithBiometrics, biometricsAvailable} = useBiometrics();
  const [biometricsSwitch, setBiometricsSwitch] = useState(false);

  useEffect(() => {
    const setupBiometricLogin = async () => {
      if (biometricsAvailable) {
        const loginWithBiometricsSetting = await readData(
          'loginWithBiometrics',
        );
        if (loginWithBiometricsSetting === null) {
          await storeData('loginWithBiometrics', 'false');
          setBiometricsSwitch(false);
        } else if (loginWithBiometricsSetting === 'true') {
          setBiometricsSwitch(true);
          loginWithBiometrics();
        } else {
          setBiometricsSwitch(false);
        }
      }
    };
    setupBiometricLogin();
  }, [biometricsAvailable]);

  const biometricsSwitchToggle = async () => {
    if (!biometricsSwitch) {
      await updateData('loginWithBiometrics', 'true');
      setBiometricsSwitch(true);
      loginWithBiometrics();
    } else {
      await updateData('loginWithBiometrics', 'false');
      setBiometricsSwitch(false);
    }
  };

  return (
    <View testID="HeaderContainer" style={styles.header}>
      <Text style={styles.headerText}>{t(`${titleKey}`)}</Text>

      <TextInput
        value={userName}
        placeholder="Enter your user name"
        style={styles.textInput}
        onChangeText={newUserName => setUserName(newUserName)}
      />

      <TextInput
        value={password}
        placeholder="Enter your password"
        style={styles.textInput}
        onChangeText={newPassword => setPassword(newPassword)}
      />
      <View style={styles.buttonsContainer}>
        <GFButton route="FilmList" text="Login" />
        {biometricsAvailable && (
          <View style={styles.biometricsContainer}>
            <Text style={styles.switchText}>Login with Biometrics</Text>
            <Switch
              style={styles.switch}
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={biometricsSwitch ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={biometricsSwitchToggle}
              value={biometricsSwitch}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    width: '100%',
  },
  header: {
    width: 300,
    padding: 40,
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    backgroundColor: '#108e71ff',
    borderRadius: 15,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 100,
    shadowOpacity: 1,
    shadowColor: 'rgba(0, 0, 0, 1)',
  },
  headerText: {
    fontSize: 28,
    paddingBottom: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  switchText: {
    fontSize: 16,
    color: 'lightgrey',
    textAlign: 'center',
  },
  switch: {
    transform: [{scale: 0.8}],
    marginLeft: 5,
  },
  textInput: {
    width: '100%',
    height: 40,
    marginVertical: 10,
    marginHorizontal: 30,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  biometricsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
});

export default LoginCard;
