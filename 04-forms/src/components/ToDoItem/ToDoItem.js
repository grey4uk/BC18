import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { v4 as uuidv4 } from 'uuid';

import Container from 'components/Container/Container';

const ToDoItem = ({ item, onDelete, handleCompleted }) => {
  //   console.log('item', item);
  const { title, description, id, completed, priority } =
    item;
  const checkBoxId = uuidv4();

  const choosePriority = () => {
    switch (priority) {
      case 'low':
        return 'grey';
      case 'medium':
        return 'yellow';

      case 'heigh':
        return 'tomato';

      default:
        break;
    }
  };

  return (
    <Container
      addedStyle={{
        borderRadius: '20%',
        backgroundColor: `${completed ? 'green' : 'pink'} `,
        flexDirection: 'column',
        border: `10px solid ${choosePriority()}`,
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
        onClick={onDelete}>
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

export default ToDoItem;
