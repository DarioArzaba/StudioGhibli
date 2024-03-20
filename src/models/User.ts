export default interface User {
  isSignedIn: boolean;
  name: string;
  email: string;
  theme: string | 'default' | 'red' | 'green' | 'blue';
  language: string;
} // eslint-disable-line semi
