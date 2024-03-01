import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles/homeScreenStyles';

const HomeScreenFooter = (): React.JSX.Element => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>© 2024 My App. All rights reserved.</Text>
  </View>
);

export default HomeScreenFooter;
