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
          <TextInput
            onChangeText={newName => {
              setCurrentProfile(prevProfile => ({
                ...prevProfile,
                name: newName,
              }));
            }}
            accessibilityLabel="name"
            value={currentProfile.name}
          />
          <TextInput
            onChangeText={newEmail => {
              setCurrentProfile(prevProfile => ({
                ...prevProfile,
                email: newEmail,
              }));
            }}
            accessibilityLabel="email"
            value={currentProfile.email}
          />
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
          <Text>{currentProfile.name}</Text>
          <Text>{currentProfile.email}</Text>
          <Text>{theme}</Text>
          <TouchableOpacity
            testID="edit-button"
            onPress={() => {
              setIsEditMode(true);
            }}>
            <Text>Edit</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
export default UserProfile;
