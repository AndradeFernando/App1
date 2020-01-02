import LoginScreen from '../screens/LoginScreen';
import LogoutScreen from '../screens/LogoutScreen';
import AppMenuNavigation from './LoggedIn';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

export const getRootNavigator = createSwitchNavigator(
  {
    LoggedOut: {
      screen: LogoutScreen,
    },
    LoggedIn: {
      screen: LoginScreen,
    },

    AppMenu: {
      screen: AppMenuNavigation,
    },
  },
  {
    initialRouteName: 'LoggedIn',
  },
);
const AppNavigator = createAppContainer(getRootNavigator);

export default AppNavigator;
