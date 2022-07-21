import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import todosReducer from './todos/todosSlice';
import clickerReducer from './clicker/clickerSlice';
import authReducer from './auth/authSlice';

const persistConfig = {
  key: 'auth',
  storage,
  // whitelist: ['auth'],
};

const persistedReducer = persistReducer(
  persistConfig,
  authReducer
);

const store = configureStore({
  reducer: {
    todos: todosReducer,
    click: clickerReducer,
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }),
  ],
});

export const persistor = persistStore(store);

export default store;
