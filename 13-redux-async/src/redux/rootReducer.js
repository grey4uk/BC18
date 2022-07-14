import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import counterReducer from './counter/reducer';
import todosReducer from './todos/slice';

const rootReducerConfig = {
  key: 'root',
  storage,
  blacklist: ['count'],
};

const root = combineReducers({
  count: counterReducer,
  todos: todosReducer,
});

const persistedReducer = persistReducer(
  rootReducerConfig,
  root
);

export default persistedReducer;
