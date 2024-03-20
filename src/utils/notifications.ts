import {PermissionsAndroid, Platform} from 'react-native';

import messaging from '@react-native-firebase/messaging';

export const requestPermission = async (): Promise<void> => {
  if (Platform.OS === 'android') {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
  } else {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }
};

export const listenForNotifications = async () => {
  logFCMToken();
  // Get foreground app notifications
  messaging().onMessage(message =>
    console.log(
      'New Foreground Notification: ',
      JSON.stringify(message.notification?.title),
    ),
  );
  // Get background app notifications
  messaging()
    .getInitialNotification()
    .then(backgroundMessage =>
      console.log(
        'App Opened with Notification: ',
        JSON.stringify(backgroundMessage?.notification?.title),
      ),
    )
    .catch(console.error);
};

const logFCMToken = async (): Promise<void> => {
  const fcmToken = await messaging().getToken();
  if (fcmToken) {
    console.log('FCM Token: ', fcmToken);
  }
};
