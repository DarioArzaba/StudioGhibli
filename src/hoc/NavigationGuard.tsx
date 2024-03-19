import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {selectUserAuth} from '../app/selectors/authSelector';
import {NavigationContainer} from '@react-navigation/native';
import Stack from '../navigation/Stack';
// TODO: Lazy load screens
import HomeScreen from '../screens/HomeScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import FilmListScreen from '../screens/FilmListScreen';
import DetailsScreen from '../screens/DetailsScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import NotSignedInScreen from '../screens/NotSignedInScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import {
  deepLinksSignedInConfig,
  deepLinksSignedOutConfig,
} from '../navigation/DeepLinkConfig';
import {readData, storeObject} from '../utils/asyncStorageManager';
import {userSignUp} from '../app/actions/actionCreators';
import User from '../models/User';

const NavigationGuard = () => {
  const dispatch = useDispatch();
  const mockProfile: User = {
    name: 'dar',
    email: 'dar@gmail.com',
    theme: 'red',
    language: 'en',
    isSignedIn: false,
  };
  useEffect(() => {
    const checkProfile = async () => {
      const storedProfile = await readData('profile');
      if (storedProfile !== null) {
        const profile = JSON.parse(storedProfile);
        dispatch(userSignUp(profile));
      } else {
        await storeObject('profile', mockProfile);
      }
    };
    checkProfile();
  }, []);

  const user = useSelector(selectUserAuth);
  const isUserSignedIn = user && user.isSignedIn;
  return (
    <NavigationContainer
      linking={
        isUserSignedIn ? deepLinksSignedInConfig : deepLinksSignedOutConfig
      }>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isUserSignedIn ? (
          <Stack.Group>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="UserProfile" component={UserProfileScreen} />
            <Stack.Screen name="FilmList" component={FilmListScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="SignIn" component={SignInScreen} />
          </Stack.Group>
        )}
        <Stack.Group>
          <Stack.Screen name="NotFound" component={NotFoundScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationGuard;
