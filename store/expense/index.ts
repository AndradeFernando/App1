import { Expense } from "../../models/Expense";
import * as TYPES from "./types";

const INITIAL_STATE = {
  expenseList: [] as Expense[]
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_LIST:
      state.expenseList.push(action.payload as Expense);
      return {
        ...state,
        expenseList: [...state.expenseList]
      };
    case TYPES.REMOVE_FROM_LIST:
      state.expenseList.splice(action.payload.id - 1, 1);
      return {
        ...state,
        expenseList: [...state.expenseList]
      };
    case TYPES.GET_LIST:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
