import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View, TextInput} from 'react-native';
import {readData, storeData, updateData} from '../utils/PersistanceManager';

interface UserProfileProps {
  defaultName?: string;
  defaultEmail?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  defaultName: nameProp = 'Dario',
  defaultEmail: emailProp = 'dario@gmail.com',
}) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');

  const nullToEmptyString = (value: string | null): string => {
    return value === null ? '' : value;
  };
  useEffect(() => {
    const storeUserData = async () => {
      const name = await readData('name');
      const email = await readData('email');
      if (!name && !email) {
        await storeData('name', nameProp);
        await storeData('email', emailProp);
        const nameStored = await readData('name');
        const emailStored = await readData('email');
        setUserName(nullToEmptyString(nameStored));
        setUserEmail(nullToEmptyString(emailStored));
      } else {
        setUserName(nullToEmptyString(name));
        setUserEmail(nullToEmptyString(email));
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

  return (
    <View>
      {isEditMode ? (
        <View>
          <TextInput
            onChangeText={handleNameChange}
            accessibilityLabel="name"
            value={userName}
          />
          <TextInput
            onChangeText={handleEmailChange}
            accessibilityLabel="email"
            value={userEmail}
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
          <Text>{userName}</Text>
          <Text>{userEmail}</Text>
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
