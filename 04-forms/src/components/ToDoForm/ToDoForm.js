import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  title: '',
  description: '',
  completed: false,
  priority: 'low',
  category: 'habits',
};

const selectOptions = ['habits', 'activity', 'job'];

class ToDoForm extends React.Component {
  state = {
    ...initialState,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    //     this.setState({ title: value });
    //     this.setState({ description: value });
  };
  // handleChange =(name) => ({ target: { value } }) => {
  //     this.setState({ [name]: value });
  //     //     this.setState({ title: value });
  //     //     this.setState({ description: value });
  //   };

  onHandleSubmit = (e) => {
    e.preventDefault();

    // const title = e.currentTarget.elements[0].value;
    // const description = e.currentTarget.elements[1].value;
    // const todo = { title, description };
    const todo = { id: uuidv4(), ...this.state };
    // console.log('this.props', this.props);
    this.props.onSubmitForm(todo);
    this.setState(initialState);
    // e.currentTarget.reset();
  };

  render() {
    const { title, description, priority } = this.state;
    const { handleChange, onHandleSubmit } = this;
    return (
      <form onSubmit={onHandleSubmit}>
        <label htmlFor=''>
          Todo title
          {/* <input
            type='text'
            name='title'
            value={title}
            onChange={handleChange('title')}
          /> */}
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
          {/* <input
            type='text'
            name='description'
            value={description}
            onChange={handleChange('description')}
          /> */}
        </label>

        <div>
          <label style={{ padding: '0 10px' }}>
            LOW
            {/* <input
              type='radio'
              name='priority'
              value='low'
              checked={priority === 'low'}
              onChange={handleChange('low')}
            /> */}
            <input
              type='radio'
              name='priority'
              value='low'
              checked={priority === 'low'}
              onChange={handleChange}
            />
          </label>
          <label style={{ padding: '0 10px' }}>
            MEDIUM
            {/* <input
              type='radio'
              name='priority'
              value='medium'
              checked={priority === 'medium'}
              onChange={handleChange('medium')}
            /> */}
            <input
              type='radio'
              name='priority'
              value='medium'
              checked={priority === 'medium'}
              onChange={handleChange}
            />
          </label>
          <label style={{ padding: '0 10px' }}>
            HEIGH
            {/* <input
              type='radio'
              name='priority'
              value='heigh'
              checked={priority === 'heigh'}
              onChange={handleChange('heigh')}
            /> */}
            <input
              type='radio'
              name='priority'
              value='heigh'
              checked={priority === 'heigh'}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Choose a category:
            <select
              name='category'
              onChange={handleChange}
              defaultValue={selectOptions[0]}>
              {selectOptions.map((el, indx) => (
                <option
                  // selected={indx === 0}
                  key={el}
                  value={el}>
                  {el}
                </option>
              ))}
            </select>
          </label>
        </div>

        <button type='submit'>SUBMIT</button>
      </form>
    );
  }
}

export default ToDoForm;
