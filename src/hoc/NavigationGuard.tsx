import React from 'react';
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
import {Text} from 'react-native';

function NavigationGuard() {
  const user = useSelector(selectUserAuth);
  return (
    <>
      {/* <NavigationContainer linking={deepLinksConfig}>
        <Stack.Navigator screenOptions={{T: false}}> */}
      {user && user.isSignedIn ? (
        <NavigationContainer
          linking={deepLinksConfigSignIn}
          fallback={<Text>Loading...</Text>}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Group>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="UserProfile" component={UserProfileScreen} />
              <Stack.Screen name="FilmList" component={FilmListScreen} />
              <Stack.Screen name="Details" component={DetailsScreen} />
              <Stack.Screen name="NotFound" component={NotFoundScreen} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer
          linking={deepLinksConfigSignOut}
          fallback={<Text>Loading...</Text>}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Group>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="NotFound" component={NotFoundScreen} />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      )}
      {/* {
        <Stack.Group>
          <Stack.Screen name="NotFound" component={NotFoundScreen} />
        </Stack.Group>
      } */}
      {/* </Stack.Navigator>
      </NavigationContainer> */}
    </>
  );
}

export default NavigationGuard;
