import { Component } from 'react';

import Container from 'components/Container/Container';
import ToDoForm from 'components/ToDoForm/ToDoForm';
import ToDoList from 'components/ToDoList/ToDoList';

class ToDosView extends Component {
  state = { todos: [] };
  onSubmit = (todo) => {
    //     console.log('todo', todo);
    this.setState((prev) => ({
      todos: [...prev.todos, todo],
    }));
  };

  onDelete = (e) => {
    const id = e.currentTarget.id;
    this.setState((prev) => ({
      todos: prev.todos.filter((el) => el.id !== id),
    }));
  };

  render() {
    const { todos } = this.state;
    const { onSubmit, onDelete } = this;
    return (
      <Container addedStyle={{ flexDirection: 'column' }}>
        <ToDoForm onSubmit={onSubmit} />
        <ToDoList todos={todos} onDelete={onDelete} />
      </Container>
    );
  }
}

export default ToDosView;
