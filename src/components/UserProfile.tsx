import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useTheme} from '../hooks/useTheme';
import {readData, storeObject} from '../utils/asyncStorageManager';
import {useTranslation} from 'react-i18next';
import '../utils/i18n';
import i18next from '../utils/i18n';

type Profile = {
  name: string;
  email: string;
  theme: string;
  language: string;
};

// const changeLanguage = async (i18nInstance, profile, lng, ns) => {
//   const translations = await import(`./locales/${lng}/${ns}.json`);
//   i18nInstance.addResourceBundle(lng, ns, translations);
//   i18nInstance.changeLanguage(profile.language);
// };

const UserProfile = (): React.JSX.Element => {
  const {t} = useTranslation();
  const defaultProfile = {
    name: '',
    email: '',
    theme: 'default',
    language: 'es',
  };
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [currentProfile, setCurrentProfile] = useState<Profile>(defaultProfile);
  const {theme, setTheme} = useTheme();

  useEffect(() => {
    const checkProfile = async () => {
      const storedProfile = await readData('profile');
      if (storedProfile !== null) {
        setCurrentProfile(JSON.parse(storedProfile));
      }
    };
    checkProfile();
  }, []);

  return (
    <View style={styles.container}>
      {isEditMode ? (
        <View>
          <Text style={styles.profileLabel}>
            {t('settings-name-label-edit')}
          </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={newName => {
              setCurrentProfile(prevProfile => ({
                ...prevProfile,
                name: newName,
              }));
            }}
            accessibilityLabel="name"
            value={currentProfile.name}
          />
          <Text style={styles.profileLabel}>
            {t('settings-email-label-edit')}
          </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={newEmail => {
              setCurrentProfile(prevProfile => ({
                ...prevProfile,
                email: newEmail,
              }));
            }}
            accessibilityLabel="email"
            value={currentProfile.email}
          />
          <Text style={styles.profileLabel}>
            {t('settings-theme-label-edit')}
          </Text>
          <Picker
            testID="theme-picker"
            selectedValue={currentProfile.theme}
            onValueChange={newTheme => {
              setCurrentProfile(prevProfile => ({
                ...prevProfile,
                theme: newTheme,
              }));
              setTheme(newTheme);
            }}>
            <Picker.Item label="Blue" value="blue" />
            <Picker.Item label="Red" value="red" />
            <Picker.Item label="Green" value="green" />
          </Picker>
          <Text style={styles.profileLabel}>
            {t('settings-language-label-edit')}
          </Text>
          <Picker
            testID="language-picker"
            selectedValue={currentProfile.language}
            onValueChange={newLanguage => {
              setCurrentProfile(prevProfile => ({
                ...prevProfile,
                language: newLanguage,
              }));
            }}>
            <Picker.Item label="Español" value="es" />
            <Picker.Item label="Ingles" value="en" />
          </Picker>
          <TouchableOpacity
            testID="save-button"
            onPress={() => {
              setIsEditMode(false);
              storeObject('profile', currentProfile);
              i18next.changeLanguage(currentProfile.language);
              // changeLanguage(
              //   i18next,
              //   currentProfile,
              //   currentProfile.language,
              //   'common',
              // );
            }}>
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <View style={styles.profileSection}>
            <Text style={styles.profileLabel}>
              {t('settings-name-label-display')}
            </Text>
            <Text>{currentProfile.name}</Text>
          </View>
          <View style={styles.profileSection}>
            <Text style={styles.profileLabel}>
              {t('settings-email-label-display')}
            </Text>
            <Text>{currentProfile.email}</Text>
          </View>
          <View style={styles.profileSection}>
            <Text style={styles.profileLabel}>
              {t('settings-theme-label-display')}
            </Text>
            <Text>{theme}</Text>
          </View>
          <View style={styles.profileSection}>
            <Text style={styles.profileLabel}>
              {t('settings-language-label-display')}
            </Text>
            <Text>{currentProfile.language}</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            testID="edit-button"
            onPress={() => {
              setIsEditMode(true);
            }}>
            <Text style={styles.buttonText}>Edit</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 50,
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: 20,
  },
  profileSection: {
    marginBottom: 15,
  },
  profileLabel: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  picker: {
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
});

export default UserProfile;
