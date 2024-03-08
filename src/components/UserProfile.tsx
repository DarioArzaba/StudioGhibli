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
import {readData, storeObject} from '../utils/persistanceManager';

type Profile = {
  name: string;
  email: string;
  theme: string;
};

const UserProfile = (): React.JSX.Element => {
  const defaultProfile = {
    name: '',
    email: '',
    theme: 'default',
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
          <Text style={styles.profileLabel}>Enter your name:</Text>
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
          <Text style={styles.profileLabel}>Enter your email:</Text>
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
          <Text style={styles.profileLabel}>Select a Theme:</Text>
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
          <TouchableOpacity
            testID="save-button"
            onPress={() => {
              setIsEditMode(false);
              storeObject('profile', currentProfile);
            }}>
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <View style={styles.profileSection}>
            <Text style={styles.profileLabel}>Name</Text>
            <Text>{currentProfile.name}</Text>
          </View>
          <View style={styles.profileSection}>
            <Text style={styles.profileLabel}>Email</Text>
            <Text>{currentProfile.email}</Text>
          </View>
          <View style={styles.profileSection}>
            <Text style={styles.profileLabel}>Theme</Text>
            <Text>{theme}</Text>
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
