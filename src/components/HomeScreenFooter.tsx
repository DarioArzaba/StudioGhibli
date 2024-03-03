import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HomeScreenFooter = (): React.JSX.Element => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>© 2024 My App. All rights reserved.</Text>
  </View>
);

export const styles = StyleSheet.create({
  footer: {
    padding: 10,
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#282c34',
  },
  footerText: {
    textAlign: 'center',
    color: 'white',
  },
});

export default HomeScreenFooter;
