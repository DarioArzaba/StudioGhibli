import React, {useEffect, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import {readData, storeData, updateData} from '../utils/PersistanceManager';
import {Picker} from '@react-native-picker/picker';

interface UserProfileProps {
  defaultName?: string;
  defaultEmail?: string;
  defaultColor?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  defaultName: nameProp = 'Dario',
  defaultEmail: emailProp = 'dario@gmail.com',
  defaultColor: colorProp = 'lightblue',
}) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [userColor, setUserColor] = useState<string>('');

  const nullToEmptyString = (value: string | null): string => {
    return value === null ? '' : value;
  };
  useEffect(() => {
    const storeUserData = async () => {
      const name = await readData('name');
      const email = await readData('email');
      const color = await readData('color');
      if (!name || !email || !color) {
        await storeData('name', nameProp);
        await storeData('email', emailProp);
        await storeData('color', colorProp);
        const nameStored = await readData('name');
        const emailStored = await readData('email');
        const colorStored = await readData('color');
        setUserName(nullToEmptyString(nameStored));
        setUserEmail(nullToEmptyString(emailStored));
        setUserColor(nullToEmptyString(colorStored));
      } else {
        setUserName(nullToEmptyString(name));
        setUserEmail(nullToEmptyString(email));
        setUserColor(nullToEmptyString(color));
      }
    };
    storeUserData();
  }, []);

  const handleNameChange = async (newName: string) => {
    await updateData('name', newName);
    const updatedName = await readData('name');
    setUserName(nullToEmptyString(nullToEmptyString(updatedName)));
  };

  const handleEmailChange = async (newEmail: string) => {
    await updateData('email', newEmail);
    const updatedEmail = await readData('email');
    setUserEmail(nullToEmptyString(updatedEmail));
  };

  const handleColorChange = async (newColor: string) => {
    await updateData('color', newColor);
    const updatedColor = await readData('color');
    setUserColor(nullToEmptyString(updatedColor));
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: userColor,
        },
      ]}>
      {isEditMode ? (
        <View>
          <Text style={styles.label}>Enter your name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleNameChange}
            accessibilityLabel="name"
            value={userName}
          />
          <Text style={styles.label}>Enter your email:</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleEmailChange}
            accessibilityLabel="email"
            value={userEmail}
          />
          <Text style={styles.label}>Change the theme:</Text>
          <Picker
            selectedValue={userColor}
            onValueChange={handleColorChange}
            style={styles.picker}>
            <Picker.Item label="White" value="white" />
            <Picker.Item label="Green" value="lightgreen" />
            <Picker.Item label="Blue" value="lightblue" />
          </Picker>
          <TouchableOpacity
            style={styles.button}
            testID="save-button"
            onPress={() => {
              setIsEditMode(false);
            }}>
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.text}>{userName}</Text>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.text}>{userEmail}</Text>
          <Text style={styles.label}>Theme:</Text>
          <Text style={styles.text}>{userColor}</Text>
          <TouchableOpacity
            style={styles.button}
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
    width: '100%',
    alignItems: 'center',
    paddingTop: 50,
  },
  button: {
    alignItems: 'center',
    width: 200,
    height: 40,
    borderWidth: 1,
    paddingLeft: 10,
    paddingVertical: 10,
    marginVertical: 40,
    marginTop: 200,
  },
  label: {
    marginBottom: 5,
  },
  text: {
    justifyContent: 'center',
    height: 40,
    paddingLeft: 10,
    paddingVertical: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  picker: {
    height: 50,
    width: 150,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
  },
});

export default UserProfile;
