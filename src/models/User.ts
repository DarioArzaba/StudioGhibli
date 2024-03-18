export default interface User {
  isUserSigned: boolean;
  name: string;
  email: string;
  theme: string | 'default';
  language: string;
}
