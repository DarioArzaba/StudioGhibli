import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  UserProfile: undefined;
  FilmList: undefined;
  Details: {filmIdNavProp: string};
  NotFound: undefined;
  SignIn: undefined;
  SignUp: undefined;
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

export type NotFoundNavProps = NativeStackNavigationProp<
  RootStackParamList,
  'NotFound'
>;

export type SignInNavProps = NativeStackNavigationProp<
  RootStackParamList,
  'SignIn'
>;
