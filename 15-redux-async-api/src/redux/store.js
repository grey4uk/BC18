import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { galleryApi } from './gallery/galleryApi';
import { savedGalleryApi } from './myGallery/myGallery';

const store = configureStore({
  reducer: {
    [galleryApi.reducerPath]: galleryApi.reducer,
    [savedGalleryApi.reducerPath]: savedGalleryApi.reducer,
  },
  middleware: (getDefaultMiddlewares) => [
    ...getDefaultMiddlewares(),
    galleryApi.middleware,
    savedGalleryApi.middleware,
  ],
});

export default store;
setupListeners(store.dispatch);
