import * as TYPES from "./types";
import { Expense } from "../../models/Expense";

export const addToList = (expenseItem: Expense) => {
  return {
    type: TYPES.ADD_TO_LIST,
    payload: expenseItem
  };
};

export const removeFromList = (expenseItem: Expense) => {
  return {
    type: TYPES.REMOVE_FROM_LIST,
    payload: expenseItem
  };
};

export const getList = () => {
  return {
    type: TYPES.GET_LIST
  };
};
