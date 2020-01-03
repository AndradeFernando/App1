import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import { Expense } from "../models/Expense";
import * as ExpenseActions from "../store/expense/actions";
import ExpenseListItem from "../components/ExpenseListItem";
import ExpenseList from "../components/ExpenseList";

interface StateProps {
  listOfExpenses: Expense[];
}

interface State {
  cost: number;
  expense: string;
}

interface DispatchProps {
  addToList(requestData: Expense): void;
  removeFromList(requestData: Expense): void;
  getList(): Expense[];
}

type Props = StateProps & DispatchProps & State;

class HomeScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { expense: "", cost: 0 };
  }
  textInputExpense: TextInput;
  textInputCost: TextInput;

  sayHi = (): void => {
    Alert.alert("oi");
  };

  componentDidUpdate = () => {};

  clearInput = (): void => {
    this.textInputExpense.setNativeProps({ text: "" });
    this.textInputCost.setNativeProps({ text: "" });
  };

  addToList = (): void => {
    const { listOfExpenses } = this.props;
    const { expense, cost } = this.state;

    this.props.addToList({
      id: listOfExpenses.length,
      name: expense,
      cost: cost
    } as Expense);

    this.clearInput();
  };

  removeFromList = (expenseItem: Expense): void => {
    this.props.removeFromList(expenseItem);
  };

  render(): React.ReactNode {
    const { listOfExpenses } = this.props;

    return (
      <>
        <View>
          <ExpenseList listOfExpenses={listOfExpenses} />

          {listOfExpenses.length > 0 && (
            <View style={this.styles.horizontalRule} />
          )}
          <View style={this.styles.expenseFormContainer}>
            <Text style={this.styles.expenseLabel}>EXPENSE</Text>
            <TextInput
              style={this.styles.expenseInput}
              ref={component => (this.textInputExpense = component)}
              onChangeText={val => this.setState({ expense: val })}
              placeholder="Type expense here"
            />

            <Text style={this.styles.expenseLabel}>COST</Text>
            <TextInput
              style={this.styles.expenseInput}
              ref={component => (this.textInputCost = component)}
              onChangeText={(val: string) =>
                this.setState({ cost: Number(val) })
              }
              placeholder="Type cost here"
            />
            <TouchableOpacity style={this.styles.btn} onPress={this.addToList}>
              <Text style={this.styles.btnLabel}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }

  styles = StyleSheet.create({
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
}

const mapStateToProps = state => {
  return {
    listOfExpenses: state.expense.expenseList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToList: (expense: Expense) => {
      dispatch(ExpenseActions.addToList(expense));
    },
    removeFromList: (expense: Expense) => {
      dispatch(ExpenseActions.removeFromList(expense));
    },
    getList: () => {
      dispatch(ExpenseActions.getList());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
