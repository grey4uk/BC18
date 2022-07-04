import React, { Component } from 'react';
import PropTypes from 'prop-types';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { v4 as uuidv4 } from 'uuid';

import Container from 'components/Container/Container';
import { priorityOptions } from '../ToDoForm/ToDoForm';

class ToDoItem extends Component {
  // static propTypes = {
  //   onDelete: PropTypes.func.isRequired,
  //   handleCompleted: PropTypes.func.isRequired,
  //   item: PropTypes.exact({
  //     title: PropTypes.string.isRequired,
  //     description: PropTypes.string.isRequired,
  //     id: PropTypes.string.isRequired,
  //     completed: PropTypes.bool.isRequired,
  //     priority: PropTypes.string.isRequired,
  //     category: PropTypes.string.isRequired,
  //     email: PropTypes.string,
  //   }).isRequired,
  // };

  checkBoxId = uuidv4();

  choosePriority = (priority) => {
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

  render() {
    const { onDelete, handleCompleted, item } = this.props;
    const { title, description, id, completed, priority } =
      item;
    const { choosePriority, checkBoxId } = this;

    return (
      <Container
        addedStyle={{
          borderRadius: '10vw',
          backgroundColor: `${
            completed ? 'green' : 'pink'
          } `,
          flexDirection: 'column',
          border: `10px solid ${choosePriority(priority)}`,
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
  }
}

ToDoItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  handleCompleted: PropTypes.func.isRequired,
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    priority: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    // email: PropTypes.string,
  }).isRequired,
};
// ToDoItem.propTypes = {
//   onDelete: PropTypes.func.isRequired,
//   handleCompleted: PropTypes.func.isRequired,
//   item: PropTypes.exact({
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//     completed: PropTypes.bool.isRequired,
//     priority: PropTypes.string.isRequired,
//     category: PropTypes.string.isRequired,
//     // email: PropTypes.string,
//   }).isRequired,
// };

export default ToDoItem;

// const ToDoItem = ({ item, onDelete, handleCompleted }) => {
//   //   console.log('item', item);
//   const { title, description, id, completed, priority } =
//     item;
//   const checkBoxId = uuidv4();

//   const choosePriority = () => {
//     switch (priority) {
//       case 'low':
//         return 'grey';
//       case 'medium':
//         return 'yellow';

//       case 'heigh':
//         return 'tomato';

//       default:
//         break;
//     }
//   };

//   return (
//     <Container
//       addedStyle={{
//         borderRadius: '20%',
//         backgroundColor: `${completed ? 'green' : 'pink'} `,
//         flexDirection: 'column',
//         border: `10px solid ${choosePriority()}`,
//       }}>
//       <div style={{ display: 'flex' }}>
//         <h3
//           style={{
//             padding: '10px 20px',
//             textDecorationLine: `${
//               completed ? 'line-through' : 'none'
//             } `,
//           }}>
//           {title}
//         </h3>

//         <p
//           style={{
//             padding: '10px 20px',
//             textDecorationLine: `${
//               completed ? 'line-through' : 'none'
//             } `,
//           }}>
//           {description}
//         </p>
//       </div>
//       <IconButton
//         aria-label='delete'
//         id={id}
//         onClick={onDelete}>
//         <DeleteIcon />
//       </IconButton>
//       <br />
//       <label htmlFor={checkBoxId}>Done</label>
//       <input
//         type='checkbox'
//         id={checkBoxId}
//         checked={completed}
//         onChange={() => handleCompleted(id)}
//       />
//     </Container>
//   );
// };

// export default ToDoItem;
