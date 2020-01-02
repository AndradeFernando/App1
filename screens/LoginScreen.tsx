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

export default class LoginScreen extends React.Component<Props, State> {
  render(): React.ReactNode {
    const {navigation} = this.props;

    return (
      <View>
        <Text>LOG IN PAGE</Text>
        <Button
          onPress={() => {
            console.log(navigation);
            navigation.navigate({routeName: 'AppMenu'});
          }}
          title="Login"
        />
      </View>
    );
  }
}
