export const deepLinksConfig = {
  prefixes: ['ghiblifilmsapp://'],
  config: {
    screens: {
      Home: {path: 'home'},
      UserProfile: {path: 'profile'},
      FilmList: {path: 'films'},
      Details: {path: 'details/:filmIdNavProp'}, //12cfb892-aac0-4c5b-94af-521852e46d6a
    },
  },
};
