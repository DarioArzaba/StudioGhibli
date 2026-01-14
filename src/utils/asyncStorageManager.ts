import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(`Could not store data. ${e}`);
  }
};

export const readData = async (key: string): Promise<string | null> => {
  try {
    const storedData: string | null = await AsyncStorage.getItem(key);
    return storedData;
  } catch (e) {
    console.log(`Could not read data. ${e}`);
    return null;
  }
};

export const updateData = async (
  key: string,
  newValue: string,
): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, newValue);
  } catch (e) {
    console.log(`Could not update data. ${e}`);
  }
};

export const deleteData = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(`Could not delete data. ${e}`);
  }
};

export const storeObject = async <T>(
  key: string,
  jsonValue: T,
): Promise<void> => {
  try {
    const value = JSON.stringify(jsonValue);
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(`Could not store object data. ${e}`);
  }
};
