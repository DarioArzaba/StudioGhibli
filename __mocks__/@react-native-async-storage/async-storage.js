export default {
  setItem: jest.fn(),
  removeItem: jest.fn(),
  getItem: jest.fn().mockResolvedValue(null),
};
