import { createSlice } from '@reduxjs/toolkit';

import { signUp, logIn, logOut } from './authOperations';

const initialState = {
  user: {
    email: '',
    token: '',
  },
  isLoged: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoged = true;
    },
    [logIn.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoged = true;
    },
    [logOut.fulfilled]: () => {
      return initialState;
    },
  },
});

export default authSlice.reducer;
