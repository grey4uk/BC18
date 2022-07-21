import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { v4 as uuidv4 } from 'uuid';

import Container from 'components/Container/Container';
import { priorityOptions } from '../ToDoForm/ToDoForm';
import {
  updateTodoOperation,
  deleteTodoOperation,
} from 'redux/todos/operations';
import { todosAllSelector } from 'redux/todos/selectors';

const checkBoxId = uuidv4();

const ToDoItem = ({ item }) => {
  const todos = useSelector(todosAllSelector);
  const dispatch = useDispatch();
  const { title, description, id, completed, priority } =
    item;

  const choosePriority = () => {
    switch (priority) {
      case priorityOptions[0]:
        return 'grey';
      case priorityOptions[1]:
        return 'yellow';

      case priorityOptions[2]:
        return 'tomato';

      default:
        break;
    }
  };

  const handleCompleted = (id) => {
    const item = todos.find((el) => el.id === id);
    dispatch(
      updateTodoOperation({
        ...item,
        completed: !item.completed,
      })
    );
  };

  const onDelete = (id) =>
    dispatch(deleteTodoOperation(id));

  return (
    <Container
      addedStyle={{
        borderRadius: '10vw',
        backgroundColor: `${completed ? 'green' : 'pink'} `,
        flexDirection: 'column',
        border: `10px solid ${choosePriority()}`,
        minWidth: '50vw',
        opacity: `${completed ? 0.5 : 1} `,
      }}>
      <div style={{ display: 'flex' }}>
        <h3
          style={{
            padding: '10px 20px',
            textDecorationLine: `${
              completed ? 'line-through' : 'none'
            } `,
          }}>
          {title}
        </h3>

        <p
          style={{
            padding: '10px 20px',
            textDecorationLine: `${
              completed ? 'line-through' : 'none'
            } `,
          }}>
          {description}
        </p>
      </div>
      <IconButton
        aria-label='delete'
        id={id}
        onClick={() => onDelete(id)}>
        <DeleteIcon />
      </IconButton>
      <br />
      <label htmlFor={checkBoxId}>Done</label>
      <input
        type='checkbox'
        id={checkBoxId}
        checked={completed}
        onChange={() => handleCompleted(id)}
      />
    </Container>
  );
};

ToDoItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    priority: PropTypes.string,
    category: PropTypes.string,
    // email: PropTypes.string,
  }).isRequired,
};

export default ToDoItem;
