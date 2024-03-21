import {PermissionsAndroid, Platform} from 'react-native';
import notifee, {Notification} from '@notifee/react-native';
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';

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

export const displayLocalNotification = async (
  message: FirebaseMessagingTypes.RemoteMessage,
): Promise<void> => {
  const data = {
    title: message.notification?.title,
    body: message.notification?.body,
    ios: {
      attachments: [
        {
          url: message.data?.filmImageURL,
          thumbnailHidden: false,
        },
      ],
    },
  };
  await notifee.displayNotification(data);
};

export const listenForNotifications = async (): Promise<void> => {
  logFCMToken();

  // Listen for messages in background
  messaging().onNotificationOpenedApp(message => {
    console.log(
      'Notification opened app from background state: ',
      message.notification?.title,
    );
  });

  // Listen for messages in foreground
  messaging().onMessage(async message => {
    console.log('New Foreground Notification: ', message.notification?.title);
    if (Platform.OS === 'ios') {
      displayLocalNotification(message);
    }
  });
  messaging()
    .getInitialNotification()
    .then(async backgroundMessage => {
      console.log(
        'Notification opened app from quit state: ',
        JSON.stringify(backgroundMessage?.notification?.title),
      );
    })
    .catch(console.error);
};

const logFCMToken = async (): Promise<void> => {
  const fcmToken = await messaging().getToken();
  if (fcmToken) {
    console.log('FCM Token: ', fcmToken);
  }
};
