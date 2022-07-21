import { createAsyncThunk } from '@reduxjs/toolkit';

import firebase from 'services/firebase';
const {
  createUserWithEmailAndPassword,
  auth,
  signOut,
  signInWithEmailAndPassword,
} = firebase;

export const signUp = createAsyncThunk(
  'auth/signup',
  async ({ email, password, navigateUser }, thunkApi) => {
    try {
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      const user = userCredential.user;
      navigateUser();
      return { email: user.email, token: user.accessToken };
    } catch (error) {
      //       const errorCode = error.code;
      const errorMessage = error.message;
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);
export const logIn = createAsyncThunk(
  'auth/login',
  async ({ email, password, navigateUser }, thunkApi) => {
    try {
      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      const user = userCredential.user;
      navigateUser();
      return { email: user.email, token: user.accessToken };
    } catch (error) {
      //       const errorCode = error.code;
      const errorMessage = error.message;
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);
export const logOut = createAsyncThunk(
  'auth/out',
  async (kickUser, thunkApi) => {
    try {
      await signOut(auth);
      // kickUser();
    } catch (error) {
      //       const errorCode = error.code;
      const errorMessage = error.message;
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);
