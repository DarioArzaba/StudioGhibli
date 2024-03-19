export default interface User {
  name: string;
  email: string;
  theme: 'green' | 'red' | 'blue';
  language: 'en' | 'es' | 'fr';
  isSignedIn: boolean;
} // eslint-disable-line semi
