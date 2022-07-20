import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  fetchTodos,
  changeTodo,
  createTodo,
  deleteTodo,
} from 'services/todosApi';

export const getAllTodos = createAsyncThunk(
  'GET_TODOS',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchTodos();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTodoOperation = createAsyncThunk(
  'UPDATE_TODO',
  async (item, { rejectWithValue }) => {
    try {
      const { data } = await changeTodo(item);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTodoOperation = createAsyncThunk(
  'DELETE_TODO',
  async (id, { rejectWithValue }) => {
    try {
      await deleteTodo(id);

      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addTodoOperation = createAsyncThunk(
  'CREATE_TODO',
  async (item, { rejectWithValue }) => {
    try {
      const { data } = await createTodo(item);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
