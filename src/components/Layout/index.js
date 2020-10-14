import { createSwitchNavigator } from 'react-navigation'
import 'react-native-gesture-handler';

import LoggedOutNavigator from './LoggedOutNavigator'
import LoggedInNavigator from './LoggedInNavigator'

export const getRootNavigator = (loggedIn = false) => createSwitchNavigator(
  {
    LoggedOut: {
      screen: LoggedOutNavigator
    },
    LoggedIn: {
      screen: LoggedInNavigator
    }
  },
  {
    initialRouteName: loggedIn ? 'LoggedIn' : 'LoggedOut'
  }
);