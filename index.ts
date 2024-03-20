import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
messaging().setBackgroundMessageHandler(async message => {
  const backgroundTaskMessage = await JSON.stringify(
    message.notification?.title,
  );
  console.log(
    'Notification task before app is registered:',
    backgroundTaskMessage,
  );
});

AppRegistry.registerComponent(appName, () => App);
