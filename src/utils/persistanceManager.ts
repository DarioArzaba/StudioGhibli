import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {}
};

export const readData = async (key: string): Promise<string | null> => {
  try {
    const storedData: string | null = await AsyncStorage.getItem(key);
    return storedData;
  } catch (e) {
    return null;
  }
};

export const updateData = async (
  key: string,
  newValue: string,
): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, newValue);
  } catch (e) {}
};

export const deleteData = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {}
};

export const storeObject = async <T>(
  key: string,
  jsonValue: T,
): Promise<void> => {
  try {
    const value = JSON.stringify(jsonValue);
    await AsyncStorage.setItem(key, value);
  } catch (e) {}
};
