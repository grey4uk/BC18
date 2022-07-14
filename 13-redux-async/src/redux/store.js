import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const customMiddleWare = (store) => (next) => (action) => {
  // console.log('Middleware triggered:', action);
  // console.log('store.getState()', store.getState());
  // console.log('next', next);
  next(action);
};

const preloadedState = {
  count: { count: 99, filter: '' },
  todos: [{ title: 'HELLO WORLD' }],
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares({
      serializableCheck: {
        ignoreActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    })
      .concat(customMiddleWare)
      .concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
});

// console.log('customMiddleWare', customMiddleWare(store));

export const persistore = persistStore(store);
