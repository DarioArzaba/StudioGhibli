import React, {useState} from 'react';
import {Text, TouchableOpacity, View, TextInput} from 'react-native';

interface UserProfileProps {
  name?: string;
  email?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  name = 'Dario',
  email = 'dario@gmail.com',
}) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>(name);
  const [userEmail, setUserEmail] = useState<string>(email);
  return (
    <View>
      {isEditMode ? (
        <View>
          <TextInput
            onChangeText={newName => setUserName(newName)}
            accessibilityLabel="name"
            value={userName}
          />
          <TextInput
            onChangeText={newEmail => setUserEmail(newEmail)}
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
