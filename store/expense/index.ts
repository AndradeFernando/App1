import {Expense} from '../../models/Expense';
import * as TYPES from './types';

const INITIAL_STATE = {
  expenseList: [
    {id: 1212, name: 'mobile', cost: 12113},
    {id: 1222, name: 'eletricity', cost: 1212},
  ] as Expense[],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.ADD_TO_LIST:
      state.expenseList.push(action.payload as Expense);
      console.log('state at reducer-addToList', state);
      return {
        ...state,
        expenseList: [...state.expenseList],
      };
    case TYPES.GET_LIST:
      console.log('state at reducer-getList', state);
      return {
        ...state,
      };
    default:
      console.log('state at reducer-default', state);
      return state;
  }
};

export default reducer;
