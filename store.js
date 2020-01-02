import {combineReducers, createStore} from 'redux';
import expenseReducer from './store/expense/index';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const rootReducer = combineReducers({
  expense: expenseReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export {store, persistor};
