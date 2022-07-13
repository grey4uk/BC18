import { createReducer } from '@reduxjs/toolkit';
import { addTodoAction } from './actions';

const init = [];

const reducer = createReducer(init, {
  [addTodoAction]: (state, { payload }) => [
    ...state,
    payload,
  ],
});

export default reducer;
