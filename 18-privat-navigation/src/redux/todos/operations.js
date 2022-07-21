import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  fetchTodos,
  changeTodo,
  createTodo,
  deleteTodo,
} from 'services/todosApi';

import firebase from 'services/firebase';
const {
  database,
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} = firebase;

const handleGetDataFromFirebase = async () => {
  try {
    const collectionRef = collection(database, 'todos');
    const querySnapshot = await getDocs(collectionRef);

    const preparedData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    // console.log('preparedData', preparedData);
    return preparedData;
  } catch (error) {
    console.log('error.message', error.message);
    throw new Error(error);
  }
};

export const getAllTodos = createAsyncThunk(
  'GET_TODOS',
  async (_, { rejectWithValue }) => {
    try {
      const result = await handleGetDataFromFirebase();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateTodoOperation = createAsyncThunk(
  'UPDATE_TODO',
  async (item, { rejectWithValue }) => {
    try {
      const washingtonRef = doc(database, 'todos', item.id);

      // Set the "capital" field of the city 'DC'
      await updateDoc(washingtonRef, item);
      return await handleGetDataFromFirebase();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTodoOperation = createAsyncThunk(
  'DELETE_TODO',
  async (id, { rejectWithValue }) => {
    try {
      await deleteDoc(doc(database, 'todos', id));

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
      await addDoc(collection(database, 'todos'), item);
      const res = await handleGetDataFromFirebase();
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
