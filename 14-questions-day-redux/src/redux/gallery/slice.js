import {
  combineReducers,
  createSlice,
} from '@reduxjs/toolkit';
import { getGalleryImages } from './operations';

const gallerySlice = createSlice({
  name: 'GALLERY_ITEMS',
  initialState: [],
  // reducers:{},
  extraReducers: {
    [getGalleryImages.fulfilled]: (state, { payload }) => {
      return [...state, ...payload];
    },
  },
});

const galleryLoading = createSlice({
  name: 'GALLERY_LOADING',
  initialState: false,
  // reducers:{},
  extraReducers: {
    [getGalleryImages.pending]: () => true,
    [getGalleryImages.fulfilled]: () => false,
    [getGalleryImages.rejected]: () => false,
  },
});

const galleryError = createSlice({
  name: 'GALLERY_ERROR',
  initialState: '',
  // reducers:{},
  extraReducers: {
    [getGalleryImages.pending]: () => '',

    [getGalleryImages.rejected]: (_, { payload }) =>
      payload,
  },
});

const galleryReducer = combineReducers({
  items: gallerySlice.reducer,
  loading: galleryLoading.reducer,
  error: galleryError.reducer,
});

export default galleryReducer;
