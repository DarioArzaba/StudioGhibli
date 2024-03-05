module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.(png|jpg|jpeg|gif|webp|svg)$': 'jest-transform-stub',
  },
  //setupFilesAfterEnv: ['@testing-library/react-native/extend-expect'],
  //testEnvironment: 'jsdom',
};
