import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import '../utils/i18n';
const Footer = ({textKey}: {textKey: string}): React.JSX.Element => {
  const {t} = useTranslation();
  return (
    <View style={styles.footer}>
      <Text testID="footer" style={styles.footerText}>
        {t(`${textKey}`)}
      </Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  footer: {
    padding: 10,
    textAlign: 'center',
    width: '100%',
    backgroundColor: '#282c34',
  },
  footerText: {
    textAlign: 'center',
    color: 'white',
  },
});

export default Footer;
