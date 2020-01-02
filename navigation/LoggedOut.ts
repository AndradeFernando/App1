import LoginScreen from '../screens/LoginScreen';
import {createSwitchNavigator} from 'react-navigation';

export const loggedOutNavigator = () =>
  createSwitchNavigator({
    Loggin: {
      screen: LoginScreen,
    },
  });
