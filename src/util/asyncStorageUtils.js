import AsyncStorage from "@react-native-async-storage/async-storage";

export const getItem = async (key) => {
  const result = await AsyncStorage.getItem(key);
  return JSON.parse(result);
};

export const setItem = async (key, value) => {
  await AsyncStorage.setItem(key, JSON.stringify(value));
};

export const removeItem = async (key) => {
  await AsyncStorage.removeItem(key);
};
