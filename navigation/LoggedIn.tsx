import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import Tela1 from '../screens/Tela1';
import Tela2 from '../screens/Tela2';
import Tela3 from '../screens/Tela3';

export class AppTeste extends React.Component {
  render() {
    return <View />;
  }
}

const bottomTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="home" size={25} color={tintColor} />
      ),
    },
  },
  Favoritos: {
    screen: Tela1,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="favorite" size={25} color={tintColor} />
      ),
    },
  },
  Busca: {
    screen: Tela2,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="find-in-page" size={25} color={tintColor} />
      ),
    },
  },

  Conta: {
    screen: Tela3,
    navigationOptions: {
      tabBarIcon: ({tintColor}) => (
        <Icon name="person" size={25} color={tintColor} />
      ),
    },
  },
});

export default createAppContainer(bottomTabNavigator);
