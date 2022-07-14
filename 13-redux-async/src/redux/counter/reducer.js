import {
  combineReducers,
  createReducer,
} from '@reduxjs/toolkit';

import {
  increment,
  decrement,
  filterAction,
} from './actions';
const init = 5;

const reducer = createReducer(init, {
  // [increment.type]:
  [increment]: (state, { payload = 0 }) => {
    console.log('state', state);
    return state + payload;
  },
  // [decrement.type]:
  [decrement]: (state, { payload = 0 }) => state - payload,
});

const initFilter = '';

const filter = createReducer(initFilter, {
  [filterAction]: (_, { payload }) => payload,
});

const combinedReducer = combineReducers({
  count: reducer,
  filter: filter,
});

export default combinedReducer;
