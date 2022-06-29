import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import Container from 'components/Container/Container';

const ToDoItem = ({ item, onDelete }) => {
  //   console.log('item', item);
  const { title, description, id } = item;
  return (
    <Container
      addedStyle={{
        borderRadius: '20%',
        backgroundColor: 'pink',
        flexDirectio: 'column',
      }}>
      <h3>{title}</h3>
      <p>{description}</p>

      <IconButton
        aria-label='delete'
        id={id}
        onClick={onDelete}>
        <DeleteIcon />
      </IconButton>
    </Container>
  );
};

export default ToDoItem;
