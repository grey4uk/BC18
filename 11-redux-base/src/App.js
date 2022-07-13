// oldschool

// import { connect } from 'react-redux';
// import { store } from 'redux/store';

// const App = ({ count, increment }) => {
//   // console.log('store', store.getState());
//   console.log('count', count);
//   return (
//     <>
//       <h1>REDUX</h1>
//       <br />
//       <button type='button' onClick={() => increment(5)}>
//         {/* onClick={() => store.dispatch(increment(5))}> */}
//         {/* {type:'INCREMENT',payload:5} */}
//         INCREMENT
//       </button>
//     </>
//   );
// };

// const mapDispatchToProps = (dispatch) => ({
//   increment: (value) =>
//     dispatch({ type: 'INCREMENT', payload: value }),
// });

// const mapStateToProps = (state) => ({
//   count: state.count,
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(App);

import { useDispatch, useSelector } from 'react-redux';

import {
  increment,
  decrement,
} from 'redux/counter/actions';
import { counterSelector } from 'redux/counter/selectors';
import { todosSelector } from 'redux/todos/selectors';
import { addTodoAction } from 'redux/todos/actions';

const App = () => {
  const count = useSelector(counterSelector);
  const todos = useSelector(todosSelector);
  const state = useSelector((state) => state);

  console.log('todos', todos);
  console.log('state', state);

  const mydispatch = useDispatch();

  const onSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;

    mydispatch(
      addTodoAction({ title: form.elements.todo.value })
    );
    form.reset();
  };

  return (
    <>
      <h2>REDUX</h2>
      <br />
      <h1>{count}</h1>
      <br />
      <div>
        <button
          type='button'
          onClick={() => mydispatch(increment())}>
          INCREMENT
        </button>
        <button
          type='button'
          onClick={() => mydispatch(decrement())}>
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
