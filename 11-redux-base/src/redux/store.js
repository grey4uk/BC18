import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';

import counterReducer from './counter/reducer';
import todosReducer from './todos/reducer';

const customMiddleWare = (store) => (next) => (action) => {
  console.log('Middleware triggered:', action);
  next(action);
};

const combinedReducer = combineReducers({
  count: counterReducer,
  todos: todosReducer,
});

export const store = createStore(
  combinedReducer,
  // { count: 5 },
  applyMiddleware(customMiddleWare)
);

// console.log('store', store);
