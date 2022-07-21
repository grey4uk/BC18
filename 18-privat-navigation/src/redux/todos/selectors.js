import { createSelector } from '@reduxjs/toolkit';

export const todosAllSelector = (state) =>
  state.todos.todos;

export const todosErrorSelector = (state) =>
  state.todos.todosError;

// const completedTodos = createSelector(
//   todosAllSelector,
//   (todos) => [...todos].filter((el) => el.completed)
// );
// const unCompletedTodos = createSelector(
//   todosAllSelector,
//   (todos) => [...todos].filter((el) => !el.completed)
// );

const completedTodos = (state) => {
  const todos = todosAllSelector(state);
  return [...todos].filter((el) => el.completed);
};
const unCompletedTodos = (state) => {
  const todos = todosAllSelector(state);
  return [...todos].filter((el) => !el.completed);
};

export const sortTodos = createSelector(
  completedTodos,
  unCompletedTodos,
  (completedTodos, unCompletedTodos) => [
    ...unCompletedTodos,
    ...completedTodos,
  ]
);

// export const sortTodos = createSelector(
//   todosAllSelector,
//   (todos) => {
//     return todos.length
//       ? [...todos].sort((a, b) => {
//           return a.completed - b.completed;
//         })
//       : [];
//   }
// );

// export const sortTodos = (state) => {
//   const todos = todosAllSelector(state);
//   console.log('todos', todos);

//   const sorted = todos.length
//     ? //     ? todos.sort((a, b) => {
//       [...todos].sort((a, b) => {
//         return a.completed - b.completed;
//       })
//     : [];

//   return sorted;
// };
