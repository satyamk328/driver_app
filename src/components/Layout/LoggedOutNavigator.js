import { createStackNavigator } from 'react-navigation'

import Login from '../Module/Login'

const LoggedOutNavigator = createStackNavigator({
  Login: {
    screen: Login
  }
});

export default LoggedOutNavigator