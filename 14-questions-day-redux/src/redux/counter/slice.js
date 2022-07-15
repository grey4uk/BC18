import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'COUNTER',
  initialState: 0,
  reducers: {
    init: (_, action) => {
      const { payload } = action;
      return payload;
    },
    increment: (state, { payload }) => {
      return state + (payload || 1);
    },
    decrement: (state, { payload }) => {
      const baseDecrement = payload || 1;
      if (baseDecrement <= state) {
        return state - baseDecrement;
      } else {
        alert("We can't decrement this");
        return state;
      }
    },
  },
  extraReducers: {},
});

console.log('counterSlice', counterSlice);

export const { init, increment, decrement } =
  counterSlice.actions;
export default counterSlice.reducer;
