import React from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {Expense} from '../models/Expense';
import * as ExpenseActions from '../store/expense/actions';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface StateProps {
  listOfExpenses: Expense[];
}

interface State {
  cost: number;
  expense: string;
}

interface DispatchProps {
  addToList(requestData: Expense): void;
  getList(): Expense[];
}

type Props = StateProps & DispatchProps & State;

class HomeScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {expense: '', cost: 0};
  }

  textInputExpense: TextInput;
  textInputCost: TextInput;

  clearInput = (): void => {
    this.textInputExpense.setNativeProps({text: ''});
    this.textInputCost.setNativeProps({text: ''});
  };

  addToList = (): void => {
    const {listOfExpenses} = this.props;
    const {expense, cost} = this.state;

    this.props.addToList({
      id: listOfExpenses.length,
      name: expense,
      cost: cost,
    } as Expense);

    this.clearInput();
  };

  render(): React.ReactNode {
    const {listOfExpenses} = this.props;

    return (
      <>
        <View>
          <View style={this.styles.listContainer}>
            {
              <FlatList
                data={listOfExpenses}
                renderItem={({item}) => (
                  <Text style={this.styles.listItem}>
                    {item.name} - {item.cost}
                  </Text>
                )}
              />
            }
          </View>
          <View style={this.styles.expenseFormContainer}>
            <Text style={this.styles.expenseLabel}>EXPENSE</Text>
            <TextInput
              style={this.styles.expenseInput}
              ref={component => (this.textInputExpense = component)}
              onChangeText={val => this.setState({expense: val})}
              placeholder="Type expense here"
            />

            <Text style={this.styles.expenseLabel}>COST</Text>
            <TextInput
              style={this.styles.expenseInput}
              ref={component => (this.textInputCost = component)}
              onChangeText={(val: string) => this.setState({cost: Number(val)})}
              placeholder="Type cost here"
            />
            <TouchableOpacity
              style={this.styles.btn}
              onPress={() => {
                Alert.alert('oi');
              }}>
              <Text style={this.styles.btnLabel}>Add to the list</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }

  styles = StyleSheet.create({
    listItem: {
      color: '#3F9B35',
      fontSize: 20,
      fontFamily: 'Verdana',
      borderStyle: 'solid',
      borderWidth: 1,
      margin: 6,
      padding: 5,
      borderRadius: 5,
    },
    expenseFormContainer: {
      position: 'relative',
      bottom: 0,
      padding: 20,
      justifyContent: 'center',
    },
    btnLabel: {
      fontWeight: 'bold',
      fontSize: 23,
      color: '#fff',
    },

    expenseLabel: {
      margin: 5,
      fontSize: 20,
      fontWeight: 'bold',
    },
    expenseInput: {
      borderWidth: 1,
      borderStyle: 'solid',
      margin: 5,
    },
    btn: {
      borderRadius: 5,
      backgroundColor: '#339CFF',
      justifyContent: 'center',
      alignItems: 'center',

      margin: 20,
    },

    listContainer: {
      padding: 10,
    },

    expenseFieldContainer: {},
  });
}

const mapStateToProps = state => {
  return {
    listOfExpenses: state.expense.expenseList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToList: (expense: Expense) => {
      dispatch(ExpenseActions.addToList(expense));
    },
    getList: () => {
      dispatch(ExpenseActions.getList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
