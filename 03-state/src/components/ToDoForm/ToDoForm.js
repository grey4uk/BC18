import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  title: '',
  description: '',
};

class ToDoForm extends React.Component {
  state = {
    ...initialState,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    //     this.setState({ title: value });
    //     this.setState({ description: value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const todo = { id: uuidv4(), ...this.state };
    this.props.onSubmit(todo);
    this.setState(initialState);
  };

  render() {
    const { title, description } = this.state;
    const { handleChange, onSubmit } = this;
    return (
      <form onSubmit={onSubmit}>
        <label>
          Todo title
          <input
            type='text'
            name='title'
            value={title}
            onChange={handleChange}
          />
        </label>
        <label>
          Todo description
          <input
            type='text'
            name='description'
            value={description}
            onChange={handleChange}
          />
        </label>
        <button type='submit'>SUBMIT</button>
      </form>
    );
  }
}

export default ToDoForm;
