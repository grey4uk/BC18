import { createAsyncThunk } from '@reduxjs/toolkit';

import methods from 'services/fetchImages';

const { getDogsImages } = methods;

export const getGalleryImages = createAsyncThunk(
  'GALLERY/GET',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getDogsImages();
      return data.message;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
