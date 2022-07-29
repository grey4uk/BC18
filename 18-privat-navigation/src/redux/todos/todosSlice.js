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
  reducers:{},
  extraReducers: {
    [getAllTodos.fulfilled]: (_, { payload }) => {
      return payload;
    },
    [updateTodoOperation.fulfilled]: (_, { payload }) => {
      return payload;
    },
    [addTodoOperation.fulfilled]: (_, action) => {
      const { payload } = action;

      return payload;
      // return [...state, payload];
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
