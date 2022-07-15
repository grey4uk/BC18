import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import galleryReducer from './gallery';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    images: galleryReducer,
  },
});
