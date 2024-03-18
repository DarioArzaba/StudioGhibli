import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  UserProfile: undefined;
  FilmList: undefined;
  Details: {filmIdNavProp: string};
  NotFound: undefined;
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

export type DetailsNavProps = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;

export type LoginNavProps = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

export type NotFoundNavProps = NativeStackNavigationProp<
  RootStackParamList,
  'NotFound'
>;
