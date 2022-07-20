import Container from 'components/Container/Container';
import ToDoForm from 'components/ToDoForm/ToDoForm';
import ToDoList from 'components/ToDoList/ToDoList';
import Clicker from 'components/Clicker/Clicker';

const ToDosView = () => {
  return (
    <Container addedStyle={{ flexDirection: 'column' }}>
      <ToDoForm />
      <ToDoList />
      <Clicker />
    </Container>
  );
};

export default ToDosView;
