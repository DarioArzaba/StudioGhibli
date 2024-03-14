import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './app/store/store';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './navigation/Stack';
import HomeScreen from './screens/HomeScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import FilmListScreen from './screens/FilmListScreen';
import DetailsScreen from './screens/DetailsScreen';
import {Linking} from 'react-native';

const App = (): React.JSX.Element => {
  useEffect(() => {
    // Handle deeplink when app not opened
    Linking.getInitialURL()
      .then(url => {
        if (url) {
          console.log(url);
        }
      })
      .catch(console.error);

    // Handle deeplink when app in foreground
    const checkCanOpenURL = async () => {
      Linking.addEventListener('url', async event => {
        const canURLBeOpened = await Linking.canOpenURL(event.url);
        console.log(canURLBeOpened);
      });
    };
    checkCanOpenURL();

    return Linking.removeAllListeners('url');
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="UserProfile" component={UserProfileScreen} />
          <Stack.Screen name="FilmList" component={FilmListScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
