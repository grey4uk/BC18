import { addTodoType } from './types';

const init = [];

const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case addTodoType:
      return [...state, payload];

    default:
      return state;
  }
};

export default reducer;
