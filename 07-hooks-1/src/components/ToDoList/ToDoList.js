import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';

class ToDoList extends React.Component {
  render() {
    const { todos, onDelete, handleCompleted } = this.props;
    return (
      <div className='container'>
        <ul>
          {todos.map((el) => (
            <ToDoItem
              key={el.id}
              item={el}
              onDelete={onDelete}
              handleCompleted={handleCompleted}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
