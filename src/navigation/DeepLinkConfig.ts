import {LinkingOptions} from '@react-navigation/native';
import {RootStackParamList} from './NavProps';

export const deepLinksConfigSignIn: LinkingOptions<RootStackParamList> = {
  prefixes: ['ghiblifilmsapp://'],
  config: {
    screens: {
      Home: {path: 'home'},
      UserProfile: {path: 'profile'},
      FilmList: {path: 'films'},
      Details: {path: 'details/:filmIdNavProp'}, //12cfb892-aac0-4c5b-94af-521852e46d6a
      NotFound: '*',
    },
  },
};

export const deepLinksConfigSignOut: LinkingOptions<RootStackParamList> = {
  prefixes: ['ghiblifilmsapp://'],
  config: {
    screens: {
      Login: {path: 'login'},
      NotFound: '*',
    },
  },
};
