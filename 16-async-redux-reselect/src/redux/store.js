import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todos/todosSlice';
import clickerReducer from './clicker/clickerSlice';

const store = configureStore({
  reducer: { todos: todosReducer, click: clickerReducer },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }),
  ],
});

export default store;
