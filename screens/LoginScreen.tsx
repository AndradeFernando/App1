import React from "react";
import {
  Button,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert
} from "react-native";
import {
  NavigationScreenProp,
  NavigationRoute,
  NavigationParams
} from "react-navigation";
interface Props {
  navigation: NavigationScreenProp<
    NavigationRoute<NavigationParams>,
    NavigationParams
  >;
}
interface State {}

export default class LoginScreen extends React.Component<Props, State> {
  textInputLogin: TextInput;
  textInputPassword: TextInput;

  render(): React.ReactNode {
    const { navigation } = this.props;

    return (
      <View>
        <View style={styles.expenseFormContainer}>
          <Text style={styles.expenseLabel}>LOGIN</Text>
          <TextInput
            style={styles.expenseInput}
            ref={component => (this.textInputLogin = component)}
            onChangeText={val => this.setState({ expense: val })}
            placeholder="Type expense here"
          />

          <Text style={styles.expenseLabel}>PASSWORD</Text>
          <TextInput
            style={styles.expenseInput}
            ref={component => (this.textInputPassword = component)}
            onChangeText={(val: string) => this.setState({ cost: Number(val) })}
            placeholder="Type cost here"
            keyboardType="decimal-pad"
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate({ routeName: "AppMenu" })}
          >
            <Text style={styles.btnLabel}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  horizontalRule: {
    borderBottomColor: "black",
    borderBottomWidth: 1
  },

  listItem: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  expenseFormContainer: {
    position: "relative",
    bottom: 0,
    padding: 20,
    justifyContent: "center"
  },
  btnLabel: {
    fontWeight: "bold",
    fontSize: 23,
    color: "#fff"
  },

  expenseLabel: {
    margin: 5,
    fontSize: 20,
    fontWeight: "bold"
  },
  expenseInput: {
    borderWidth: 0.5,
    borderStyle: "solid",
    margin: 1,
    paddingLeft: 10
  },
  btn: {
    height: 50,
    width: 300,
    borderRadius: 5,
    backgroundColor: "#339CFF",
    justifyContent: "center",
    alignItems: "center",
    margin: 20
  },

  listContainer: {
    padding: 10,
    display: "flex",
    flexDirection: "row"
  },

  expenseFieldContainer: {}
});
