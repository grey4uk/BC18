import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  increment,
  decrement,
} from 'redux/counter/actions';
import { counterSelector } from 'redux/counter/selectors';
import { todosSelector } from 'redux/todos/selectors';
import { addTodoAction } from 'redux/todos/slice';
import {
  initTodosAsyncThunk,
  initTodosOperation,
} from 'redux/todos/operations';

const App = () => {
  const count = useSelector(counterSelector);
  const todos = useSelector(todosSelector);
  const state = useSelector((state) => state);

  // console.log('todos', todos);
  // console.log('state', state);

  const mydispatch = useDispatch();

  const onSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;

    mydispatch(
      addTodoAction({ title: form.elements.todo.value })
    );
    form.reset();
  };

  useEffect(() => {
    mydispatch(initTodosAsyncThunk({ id: 123 }));
    // mydispatch(initTodosOperation());
  }, []);

  return (
    <>
      <h2>REDUX</h2>
      <br />
      <h1>{count}</h1>
      <br />
      <div>
        <button
          type='button'
          onClick={() => mydispatch(increment(1))}>
          INCREMENT
        </button>
        <button
          type='button'
          onClick={() => mydispatch(decrement(1))}>
          DECREMENT
        </button>
      </div>
      <form onSubmit={onSubmitForm}>
        <input name='todo' placeholder='enter todo' />
      </form>
    </>
  );
};
export default App;
