import { incrementType, decrementType } from './types';

export const increment = (value) => ({
  type: incrementType,
  payload: value,
});

export const decrement = (value) => ({
  type: decrementType,
  payload: value,
});
