import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet
} from "react-native";
import ExpenseListItem from "./ExpenseListItem";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import { Expense } from "../models/Expense";
import { removeFromList } from "../store/expense/actions";

const ExpenseList = ({ listOfExpenses, removeFromList }) => {
  const [list, setList] = useState([] as Expense[]);
  const [total, setTotal] = useState(0 as number);

  useEffect(() => {
    setList(listOfExpenses);
    let tot: number = 0;
    list.forEach(element => (tot += element.cost));
    setTotal(tot);
  });

  const remove = (item: Expense) => {
    removeFromList(item);
  };

  return (
    <>
      <View style={styles.listContainer}>
        <FlatList
          data={listOfExpenses}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <ExpenseListItem expenseItem={item as Expense} />
              <TouchableOpacity
                style={{ justifyContent: "space-around" }}
                onPress={() => {
                  remove(item as Expense);
                }}
              >
                <Icon size={30} color="black" name={"delete-forever"} />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <Text style={{ fontSize: 20 }}>Total: R$ {total}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  listContainer: {
    padding: 10,
    display: "flex",
    flexDirection: "row"
  }
});

const mapDispatchToProps = { removeFromList };

export default connect(undefined, mapDispatchToProps)(ExpenseList);
