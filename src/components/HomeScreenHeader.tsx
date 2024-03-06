import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import GetFilmsButton from './GetFilmsButton';

const HomeScreenHeader = ({
  onLoadFilmsPress,
}: {
  onLoadFilmsPress: () => void;
}): React.JSX.Element => (
  <View testID="HeaderContainer" style={styles.header}>
    <Text style={styles.headerText}>Studio Ghibli Films</Text>
    <GetFilmsButton onLoadFilmsPress={onLoadFilmsPress} />
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: '70%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    paddingTop: 40,
    paddingHorizontal: 10,
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
