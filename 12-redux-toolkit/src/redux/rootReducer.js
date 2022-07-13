import { combineReducers } from '@reduxjs/toolkit';

import counterReducer from './counter/reducer';
import todosReducer from './todos/reducer';

const root = combineReducers({
  count: counterReducer,
  todos: todosReducer,
});

export default root;
