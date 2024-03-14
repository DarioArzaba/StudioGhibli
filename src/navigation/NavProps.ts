import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import FilmDetails from '../models/FilmDetails';

export type RootStackParamList = {
  Home: undefined;
  UserProfile: undefined;
  FilmList: undefined;
  Details: {filmInfo: FilmDetails};
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
