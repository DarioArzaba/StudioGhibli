import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, Switch, Text, TextInput, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import '../utils/i18n';
import {readData, storeObject, updateData} from '../utils/asyncStorageManager';
import {checkBiometricSupport, loginWithBiometrics} from '../utils/biometrics';
import {userSignIn, userSignUp} from '../app/actions/actionCreators';
import GFButton from './GFButton';
import {useDeviceDimensions} from '../hooks/useDeviceDimensions';
import {selectUserAuth} from '../app/selectors/authSelector';

const LoginCard = ({titleKey}: {titleKey: string}): React.JSX.Element => {
  const {t} = useTranslation();
  const {isDeviceInPortraitMode} = useDeviceDimensions();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isBiometricsSupported, setIsBiometricsSupported] = useState(false);
  const [isBiometricLoginEnabled, setIsBiometricLoginEnabled] = useState(false);
  const user = useSelector(selectUserAuth);
  useEffect(() => {
    const biometricsSetup = async (): Promise<void> => {
      setIsBiometricsSupported(await checkBiometricSupport());
      const biometricSettingInStorage = await readData(
        'isBiometricLoginEnabled',
      );
      if (biometricSettingInStorage === 'true') {
        setIsBiometricLoginEnabled(true);
        await loginWithBiometrics();
      }
    };
    biometricsSetup();
  }, []);

  const validateUser = async () => {
    //TODO: Validate that user matches stored one before dispatch
    const storedProfile = await readData('profile');
    if (storedProfile !== null) {
      const profile = JSON.parse(storedProfile);
      const updatedProfile = {...profile, isSignedIn: true};
      await storeObject('profile', updatedProfile);
    }
    dispatch(userSignIn());
  };

  const toggleBiometricsEnabled = async (isSwitchOn: boolean) => {
    setIsBiometricLoginEnabled(isSwitchOn);
    if (isSwitchOn) {
      await loginWithBiometrics();
    }
    await updateData('isBiometricLoginEnabled', `${isSwitchOn}`);
  };

  return (
    <View
      style={
        isDeviceInPortraitMode
          ? portraitStyles.mainContainer
          : landscapeStyles.mainContainer
      }>
      <Text
        style={
          isDeviceInPortraitMode ? portraitStyles.title : landscapeStyles.title
        }>
        {t(`${titleKey}`)}
      </Text>

      <TextInput
        value={userName}
        placeholder="Enter your user name"
        style={portraitStyles.textInput}
        onChangeText={newUserName => setUserName(newUserName)}
      />

      <TextInput
        value={password}
        placeholder="Enter your password"
        style={portraitStyles.textInput}
        onChangeText={newPassword => setPassword(newPassword)}
      />

      <View style={portraitStyles.section}>
        <GFButton textKey="sign-in-button" onClick={validateUser} />
        {isBiometricsSupported && (
          <View
            style={
              isDeviceInPortraitMode
                ? portraitStyles.biometricsContainer
                : landscapeStyles.biometricsContainer
            }>
            {/* TODO: Change for text key */}
            <Text style={portraitStyles.biometricsDescription}>
              Login with Biometrics
            </Text>
            <Switch
              style={portraitStyles.biometricsSwitch}
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isBiometricLoginEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={isOn => toggleBiometricsEnabled(isOn)}
              value={isBiometricLoginEnabled}
            />
          </View>
        )}
      </View>
    </View>
  );
};

//TODO: Fix styles
const portraitStyles = StyleSheet.create({
  mainContainer: {
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
  title: {
    fontSize: 28,
    paddingBottom: 20,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
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
  section: {
    width: '100%',
  },
  biometricsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  biometricsDescription: {
    fontSize: 16,
    color: 'lightgrey',
    textAlign: 'center',
  },
  biometricsSwitch: {
    transform: [{scale: 0.8}],
    marginLeft: 5,
  },
});

const landscapeStyles = StyleSheet.create({
  mainContainer: {
    width: 300,
    padding: 20,
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
  title: {
    fontSize: 24,
    paddingBottom: 10,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  biometricsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginCard;
