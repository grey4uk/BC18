import { createReducer } from '@reduxjs/toolkit';
import { addTodoAction, initTodosAction } from './actions';

const init = [];

const reducer = createReducer(init, {
  [initTodosAction]: (state, { payload }) => [
    ...state,
    ...payload,
  ],
  [addTodoAction]: (state, { payload }) => [
    ...state,
    payload,
  ],
});

export default reducer;
