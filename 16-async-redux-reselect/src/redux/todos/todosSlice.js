import {
  createSlice,
  combineReducers,
} from '@reduxjs/toolkit';

import {
  addTodoOperation,
  getAllTodos,
  deleteTodoOperation,
  updateTodoOperation,
} from './operations';

export const todosSlice = createSlice({
  name: 'TODOS',
  initialState: [],
  extraReducers: {
    [getAllTodos.fulfilled]: (state, { payload }) => {
      return [...state, ...payload];
    },
    [updateTodoOperation.fulfilled]: (
      state,
      { payload }
    ) => {
      return state.map((el) =>
        el.id === payload.id ? payload : el
      );
    },
    [addTodoOperation.fulfilled]: (state, { payload }) => {
      return [...state, payload];
    },
    [deleteTodoOperation.fulfilled]: (
      state,
      { payload }
    ) => {
      return state.filter((el) => el.id !== payload);
    },
  },
});

export const todosErrorSlice = createSlice({
  name: 'TODOS_ERROR',
  initialState: '',
  extraReducers: {
    [getAllTodos.rejected]: (_, { payload }) => payload,
  },
});

const combinedTodosReducer = combineReducers({
  todos: todosSlice.reducer,
  todosError: todosErrorSlice.reducer,
});

export default combinedTodosReducer;
