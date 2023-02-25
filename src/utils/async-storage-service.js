/* Async storage related all method will resides here. */
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getItemFromAsyncStorage(key) {
  const value = await AsyncStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}
export async function setItemInAsyncStorage(key, value) {
  return AsyncStorage.setItem(key, JSON.stringify(value));
}
export async function removeItemFromAsyncStorage(key) {
  return AsyncStorage.removeItem(key);
}

// set multiple items

export async function setMultipleItemsInAsyncStorage(data) {
  return AsyncStorage.multiSet(data);
}

export async function getMultipleItemsFromAsyncStorage(keys) {
  const value = await AsyncStorage.multiGet(keys);
  return value ? JSON.parse(value) : null;
}

export async function removeMultipleItemsFromAsyncStorage(keys) {
  return AsyncStorage.multiRemove(keys);
}
