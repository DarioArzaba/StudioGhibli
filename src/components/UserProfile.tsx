import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, TextInput} from 'react-native';
import {readData, storeData, updateData} from '../utils/PersistanceManager';

interface UserProfileProps {
  name?: string;
  email?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  name = 'Dario',
  email = 'dario@gmail.com',
}) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const fetchName = () => {
    let userName;
    readData('name').then(resolvedName => {
      userName = resolvedName;
    });
    return userName;
  };

  const fetchEmail = () => {
    let userEmail;
    readData('email').then(resolvedEmail => {
      userEmail = resolvedEmail;
    });
    return userEmail;
  };

  useEffect(() => {
    const storeUserData = async () => {
      storeData('name', name);
      storeData('email', email);
    };
    storeUserData();
  }, [name, email]);

  const handleNameChange = async (newName: string) => {
    await updateData('name', newName);
  };

  const handleEmailChange = async (newEmail: string) => {
    await updateData('email', newEmail);
  };

  return (
    <View>
      {isEditMode ? (
        <View>
          <TextInput
            onChangeText={handleNameChange}
            accessibilityLabel="name"
            value={fetchName()}
          />
          <TextInput
            onChangeText={handleEmailChange}
            accessibilityLabel="email"
            value={fetchEmail()}
          />
          <TouchableOpacity
            testID="save-button"
            onPress={() => {
              setIsEditMode(false);
            }}>
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <Text>{fetchName()}</Text>
          <Text>{fetchEmail()}</Text>
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
export default UserProfile;
