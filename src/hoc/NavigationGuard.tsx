import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {selectUserAuth} from '../app/selectors/authSelector';
import {NavigationContainer} from '@react-navigation/native';
import Stack from '../navigation/Stack';
import {
  deepLinksConfig,
  deepLinksConfigSignIn,
  deepLinksConfigSignOut,
} from '../navigation/DeepLinkConfig';
import UserProfileScreen from '../screens/UserProfileScreen';
import FilmListScreen from '../screens/FilmListScreen';
import DetailsScreen from '../screens/DetailsScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import {Linking, Text} from 'react-native';

function NavigationGuard() {
  const user = useSelector(selectUserAuth);
  const isUserSignedIn = user && user.isSignedIn;

  return (
    <NavigationContainer linking={deepLinksConfig}>
      <Stack.Navigator
        initialRouteName={isUserSignedIn ? 'Home' : 'Login'}
        screenOptions={{headerShown: false}}>
        {user && user.isSignedIn ? (
          <Stack.Group>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="UserProfile" component={UserProfileScreen} />
            <Stack.Screen name="FilmList" component={FilmListScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="NotFound" component={NotFoundScreen} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationGuard;
