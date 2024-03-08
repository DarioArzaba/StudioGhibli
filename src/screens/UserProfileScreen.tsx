import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import UserProfile from '../components/UserProfile';

const UserProfileScreen = ({navigation}): React.JSX.Element => {
  return (
    <SafeAreaView style={portraitStyles.safeAreaView}>
      <UserProfile />
    </SafeAreaView>
  );
};

const portraitStyles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default UserProfileScreen;
