import React from 'react';
import {Provider} from 'react-redux';
import store from './app/store/store';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import FilmListScreen from './screens/FilmListScreen';
import Stack from './navigation/Stack';

const App = (): React.JSX.Element => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="FilmList" component={FilmListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
