import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('Data saved!');
  } catch (e) {
    console.error('Error saving data!', e);
  }
};

export const readData = async (key: string): Promise<string | null> => {
  try {
    const storedData: string | null = await AsyncStorage.getItem(key);
    console.log(`Retrieved data with key: ${key}: `, storedData);
    return storedData;
  } catch (e) {
    console.error('Error reading data!', e);
    return null;
  }
};

export const updateData = async (
  key: string,
  newValue: string,
): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, newValue);
    console.log(`Data updated to: ${newValue}`);
  } catch (e) {
    console.error('Error updating data!', e);
  }
};

export const deleteData = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`Data for item: ${key} removed!`);
  } catch (e) {
    console.error('Error removing data!', e);
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
    console.error('Error saving object', e);
  }
};
