import { createReducer } from '@reduxjs/toolkit';

import { increment, decrement } from './actions';
const init = { count: 5 };

const reducer = createReducer(init, {
  // [increment.type]:
  [increment]: (state, { payload = 0 }) => ({
    count: state.count + payload,
  }),
  // [decrement.type]:
  [decrement]: (state, { payload = 0 }) => ({
    count: state.count - payload,
  }),
});

export default reducer;
