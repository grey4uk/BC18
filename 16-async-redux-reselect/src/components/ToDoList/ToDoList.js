import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTodos } from 'redux/todos/operations';
import { sortTodos } from 'redux/todos/selectors';
import ToDoItem from '../ToDoItem/ToDoItem';

function ToDoList() {
  const todos = useSelector(sortTodos);
  console.log('todos>>>>>', todos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
  return (
    <div className='container'>
      <ul>
        {todos.length &&
          todos.map((el) => (
            <ToDoItem key={el.id} item={el} />
          ))}
      </ul>
    </div>
  );
}

export default ToDoList;
