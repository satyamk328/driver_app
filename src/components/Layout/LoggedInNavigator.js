import { createBottomTabNavigator } from 'react-navigation'

import Dashboard from './../Module/Dashboard'
import Profile from './../Module/Profile'

const LoggedInNavigator = createBottomTabNavigator({
  Dashboard: {
    screen: Dashboard
  },
  Profile: {
    screen: Profile
  }
});

export default LoggedInNavigator