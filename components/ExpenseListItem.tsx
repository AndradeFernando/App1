import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Expense } from "../models/Expense";

interface OwnProps {
  expenseItem: Expense;
}

type Props = OwnProps;

class ExpenseListItem extends React.Component<Props> {
  render(): React.ReactNode {
    const { expenseItem } = this.props;
    return (
      <>
        <View style={styles.container}>
          <Icon size={30} color="black" name={"square-inc-cash"} />
          <Text style={styles.expenseName}>
            {expenseItem.name.toUpperCase()}
          </Text>

          <Text style={styles.expenseCost}>
            {expenseItem.cost
              ? `R$ ${Number(expenseItem.cost).toFixed(2)}`
              : "0.00"}
          </Text>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    display: "flex",
    flexDirection: "row"
  },
  expenseName: {
    padding: 5,
    fontSize: 18
  },
  expenseCost: {
    padding: 0,
    color: "#FF3333",
    fontWeight: "bold",
    fontSize: 21
  }
});

export default ExpenseListItem;
