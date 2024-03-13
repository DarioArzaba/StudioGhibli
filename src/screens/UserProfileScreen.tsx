import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {useTheme} from '../hooks/useTheme';
import {readData, storeObject} from '../utils/asyncStorageManager';
import {useTranslation} from 'react-i18next';
import i18next from '../utils/i18n';
import GoBackButton from '../components/GoBackButton';

type Profile = {
  name: string;
  email: string;
  theme: string;
  language: string;
};

const UserProfile = (): React.JSX.Element => {
  const {t} = useTranslation();
  const defaultProfile = {
    name: '',
    email: '',
    theme: 'default',
    language: 'en',
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
    <View style={styles.profileContainer}>
      <GoBackButton />
      <View style={styles.container}>
        <Text style={styles.title}>User Profile</Text>
        {isEditMode ? (
          <ScrollView>
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
                <Picker.Item
                  label={t('settings-theme-picker-option-blue')}
                  value="blue"
                />
                <Picker.Item
                  label={t('settings-theme-picker-option-red')}
                  value="red"
                />
                <Picker.Item
                  label={t('settings-theme-picker-option-green')}
                  value="green"
                />
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
                <Picker.Item
                  label={t('settings-language-picker-option-spanish')}
                  value="es"
                />
                <Picker.Item
                  label={t('settings-language-picker-option-english')}
                  value="en"
                />
                <Picker.Item
                  label={t('settings-language-picker-option-french')}
                  value="fr"
                />
              </Picker>
              <TouchableOpacity
                style={styles.button}
                testID="save-button"
                onPress={() => {
                  setIsEditMode(false);
                  storeObject('profile', currentProfile);
                  i18next.changeLanguage(currentProfile.language);
                }}>
                <Text style={styles.buttonText}>
                  {t('settings-save-button')}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        ) : (
          <ScrollView>
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
                <Text style={styles.buttonText}>
                  {t('settings-edit-button')}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: 'white',
  },
  container: {
    backgroundColor: 'white',
    padding: 20,
    marginTop: 90,
    marginBottom: 200,
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
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 6,
    marginBottom: 30,
  },
});

export default UserProfile;
