import {NativeStackNavigationProp} from '@react-navigation/native-stack';

/**
 * Custom Props for navigation ensures type safety
 */

export type RootStackParamList = {
  Home: undefined; // Add here props signature for every component, undefined means no props.
  UserProfile: undefined;
  FilmList: undefined;
};

export type HomeScreenNavProps = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

export type UserProfileNavProps = NativeStackNavigationProp<
  RootStackParamList,
  'UserProfile'
>;

export type FilmListNavProps = NativeStackNavigationProp<
  RootStackParamList,
  'FilmList'
>;
