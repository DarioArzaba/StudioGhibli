import {
  deleteData,
  readData,
  storeData,
  storeObject,
  updateData,
} from '../../src/utils/asyncStorageManager';
import asyncStorage from '../../__mocks__/@react-native-async-storage/async-storage';

beforeEach(() => {
  asyncStorage.getItem.mockResolvedValue('mockValue');
  jest.clearAllMocks();
});

describe('Persistance Manager', () => {
  const mockKey = 'mockKey';
  const mockValue = 'mockValue';
  const mockObject = {
    age: 1,
    color: 'green',
  };

  it('should store data', async () => {
    await storeData(mockKey, mockValue);
    expect(asyncStorage.setItem).toHaveBeenCalledWith(mockKey, mockValue);
  });

  it('should read data', async () => {
    const dataStored = await readData(mockKey);
    expect(asyncStorage.getItem).toHaveBeenCalledWith(mockKey);
    expect(dataStored).toBe(mockValue);
  });

  it('should update data', async () => {
    await updateData(mockKey, mockValue);
    expect(asyncStorage.setItem).toHaveBeenCalledWith(mockKey, mockValue);
  });

  it('should delete data', async () => {
    await deleteData(mockKey);
    expect(asyncStorage.removeItem).toHaveBeenCalledWith(mockKey);
  });

  it('should store object', async () => {
    await storeObject(mockKey, mockObject);
    const jsonMockObject = JSON.stringify(mockObject);
    expect(asyncStorage.setItem).toHaveBeenCalledWith(mockKey, jsonMockObject);
  });
});
