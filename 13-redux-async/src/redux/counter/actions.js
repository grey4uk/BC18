import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('@COUNTER/INCREMENT');
export const decrement = createAction('@COUNTER/DECREMENT');
export const filterAction = createAction('@COUNTER/FILTER');
//  {type:'@COUNTER/FILTER',payload}
