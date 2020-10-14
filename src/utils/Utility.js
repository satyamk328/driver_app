import { AsyncStorage } from 'react-native'


const login = (credentials) => {
  await AsyncStorage.setItem('loginData', credentials);
}

const isLoggedIn = async () => {
  const value = await AsyncStorage.getItem('loginData');
  return value!== null ? true : false;
}

const logout = () => {
    await AsyncStorage.clear();
}

export {
  login,
  isLoggedIn,
  logout
}
