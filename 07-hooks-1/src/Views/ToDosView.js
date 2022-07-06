import { useState } from 'react';
// import { Component} from 'react';

import Container from 'components/Container/Container';
import ToDoForm from 'components/ToDoForm/ToDoForm';
import ToDoList from 'components/ToDoList/ToDoList';

const ToDosView = () => {
  const [todos, setTodos] = useState([]);

  const onSubmitForm = (todo) => {
    //     console.log('todo', todo);
    setTodos([...todos, todo]);
  };

  const onDelete = (e) => {
    const id = e.currentTarget.id;
    setTodos(todos.filter((el) => el.id !== id));
  };

  const handleCompleted = (id) => {
    setTodos(
      sortTodos(
        todos.map((el) =>
          el.id === id
            ? { ...el, completed: !el.completed }
            : el
        )
      )
    );
  };

  const sortTodos = (todosArray) => {
    const sorted = todosArray.sort(
      (a, b) => a.completed - b.completed
    );
    // console.log('sorted>>>>', sorted);
    return sorted;
  };

  return (
    <Container addedStyle={{ flexDirection: 'column' }}>
      <ToDoForm onSubmitForm={onSubmitForm} />
      <ToDoList
        todos={todos}
        onDelete={onDelete}
        handleCompleted={handleCompleted}
      />
    </Container>
  );
};

// class ToDosView extends Component {
//   state = { todos: [] };
//   onSubmitForm = (todo) => {
//     //     console.log('todo', todo);
//     this.setState((prev) => ({
//       todos: [...prev.todos, todo],
//     }));
//   };

//   onDelete = (e) => {
//     const id = e.currentTarget.id;
//     this.setState((prev) => ({
//       todos: prev.todos.filter((el) => el.id !== id),
//     }));
//   };

//   handleCompleted = (id) => {
//     this.setState(({ todos }) => ({
//       todos: this.sortTodos(
//         todos.map((el) =>
//           el.id === id
//             ? { ...el, completed: !el.completed }
//             : el
//         )
//       ),
//     }));
//   };

//   sortTodos = (todosArray) => {
//     const sorted = todosArray.sort(
//       (a, b) => a.completed - b.completed
//     );
//     console.log('sorted>>>>', sorted);
//     return sorted;
//   };

//   render() {
//     const { todos } = this.state;
//     const { onSubmitForm, onDelete, handleCompleted } =
//       this;
//     return (
//       <Container addedStyle={{ flexDirection: 'column' }}>
//         <ToDoForm onSubmitForm={onSubmitForm} />
//         <ToDoList
//           todos={todos}
//           onDelete={onDelete}
//           handleCompleted={handleCompleted}
//         />
//       </Container>
//     );
//   }
// }

export default ToDosView;
