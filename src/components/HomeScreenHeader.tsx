import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GetFilmsButton from './GetFilmsButton';
import UserProfileButton from './UserProfileButton';

const HomeScreenHeader = ({
  onLoadFilmsPress,
  navigation,
}: {
  onLoadFilmsPress: () => void;
}): React.JSX.Element => (
  <View testID="HeaderContainer" style={styles.header}>
    <Text style={styles.headerText}>Studio Ghibli Films</Text>
    <GetFilmsButton navigation={navigation} />
    <UserProfileButton navigation={navigation} />
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    paddingTop: 40,
    paddingHorizontal: 30,
    backgroundColor: '#282c34c0',
    borderRadius: 10,
  },
  headerText: {
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
  },
});

export default HomeScreenHeader;
