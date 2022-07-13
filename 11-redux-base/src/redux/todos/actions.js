import { addTodoType } from './types';

export const addTodoAction = (item) => ({
  type: addTodoType,
  payload: item,
});
