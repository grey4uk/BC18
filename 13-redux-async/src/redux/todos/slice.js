import {
  combineReducers,
  createSlice,
} from '@reduxjs/toolkit';
import { initTodosAsyncThunk } from './operations';

const todosSlice = createSlice({
  name: 'TODOS',
  initialState: [],
  reducers: {
    addTodoAction: (state, { payload }) => [
      ...state,
      payload,
    ],
  },
  extraReducers: {
    [initTodosAsyncThunk.fulfilled]: (
      state,
      { payload }
    ) => [...state, ...payload],
  },
});

const todosLoader = createSlice({
  name: 'TODOS_LOADER',
  initialState: false,
  extraReducers: {
    [initTodosAsyncThunk.pending]: (state, _) => true,
    [initTodosAsyncThunk.fulfilled]: (state, _) => false,
    [initTodosAsyncThunk.rejected]: (state, _) => false,
  },
});

const todosReducer = combineReducers({
  todos: todosSlice.reducer,
  loading: todosLoader.reducer,
});

export default todosReducer;

export const { addTodoAction } = todosSlice.actions;
