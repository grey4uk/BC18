import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { initTodosAction } from './actions';

export const initTodosOperation =
  () => async (dispatch) => {
    await axios(
      'https://jsonplaceholder.typicode.com/posts'
    ).then(({ data }) =>
      dispatch(
        initTodosAction(
          data
            .slice(0, 5)
            .map(({ title, id }) => ({ title, id }))
        )
      )
    );
  };

export const initTodosAsyncThunk = createAsyncThunk(
  '@TODOS/INIT',
  async (item, thunkApi) => {
    console.log('item', item);
    try {
      const { data } = await axios(
        'https://jsonplaceholder.typicode.com/posts'
      );

      //       console.log('state>>>', thunkApi.getState());
      return data
        .slice(0, 5)
        .map(({ title, id }) => ({ title, id }));
    } catch (error) {
      thunkApi.rejectWithValue(error);
      console.log('error', error);
    }
  }
);
