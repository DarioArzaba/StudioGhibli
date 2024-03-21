import {PermissionsAndroid, Platform} from 'react-native';
import notifee from '@notifee/react-native';
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

export const displayLocalNotification = async (message): Promise<void> => {
  // await notifee.createChannel({
  //   id: 'default',
  //   name: 'Default Channel',
  // });
  //

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

  // Get foreground app notifications
  messaging().onMessage(async message => {
    console.log('New Foreground Notification: ', message.notification?.title);
    if (Platform.OS === 'ios') {
      displayLocalNotification(message);
    }
  });

  // Get background app notifications
  messaging()
    .getInitialNotification()
    .then(async backgroundMessage => {
      console.log(
        'App Opened with Notification: ',
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
