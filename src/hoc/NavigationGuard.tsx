import React from 'react';
import {useSelector} from 'react-redux';
import {selectUserAuth} from '../app/selectors/authSelector';
import {NavigationContainer} from '@react-navigation/native';
import Stack from '../navigation/Stack';
import {deepLinksConfig} from '../navigation/DeepLinkConfig';
import UserProfileScreen from '../screens/UserProfileScreen';
import FilmListScreen from '../screens/FilmListScreen';
import DetailsScreen from '../screens/DetailsScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';

function NavigationGuard() {
  const user = useSelector(selectUserAuth);
  return (
    <NavigationContainer linking={deepLinksConfig}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user && user.isUserSigned ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="UserProfile" component={UserProfileScreen} />
            <Stack.Screen name="FilmList" component={FilmListScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationGuard;
