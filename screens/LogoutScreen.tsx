import React from 'react';
import {Button, Text, View} from 'react-native';
import {
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams,
} from 'react-navigation';
interface Props {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}
interface State {}

export default class LoginScreen extends React.Component<Props> {
  render(): React.ReactNode {
    const {navigation} = this.props;

    return (
      <View>
        <Text>LOG OUT PAGE</Text>
        <Button
          onPress={() => {
            navigation.navigate({routeName: 'LoggedIn'});
          }}
          title="Back to Login Page"
        />
      </View>
    );
  }
}
