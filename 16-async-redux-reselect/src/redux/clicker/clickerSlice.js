import { createSlice } from '@reduxjs/toolkit';

const clickerSlice = createSlice({
  name: 'clicker',
  initialState: 0,
  reducers: {
    increase: (state) => state + 1,
    decrease: (state) => state - 1,
  },
});
export const { increase, decrease } = clickerSlice.actions;
export default clickerSlice.reducer;
