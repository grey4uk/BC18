import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Button from 'components/Button/Button';
import Container from 'components/Container/Container';

const initialState = {
  title: '',
  description: '',
  completed: false,
  priority: 'low',
  category: 'habits',
};

export const priorityOptions = ['low', 'medium', 'high'];

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
        <h1>Do you ready create a task?</h1>
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
            padding: '10px',
          }}>
          <TextField
            fullWidth
            label='Title'
            id='fullWidth'
            name='title'
            value={title}
            onChange={handleChange}
          />
        </Box>
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
            padding: '10px',
          }}>
          <TextField
            fullWidth
            label='Description'
            id='fullWidth'
            name='description'
            value={description}
            onChange={handleChange}
          />
        </Box>
        {/* <label htmlFor=''>
          Email
        <input
            type='text'
            name='title'
            value={title}
            onChange={handleChange('title')}
          />
        <input
            type='text'
            name='email'
            value={email}
            onChange={handleChange}
          />
        </label> */}

        {/* <label htmlFor=''>
          Todo title
          <input
            type='text'
            name='title'
            value={title}
            onChange={handleChange('title')}
          />
          <input
            type='text'
            name='title'
            value={title}
            onChange={handleChange}
          />
        </label> */}

        {/* <label>
          Todo description
          <input
            type='text'
            name='description'
            value={description}
            onChange={handleChange}
          />
          <input
            type='text'
            name='description'
            value={description}
            onChange={handleChange('description')}
          />
        </label> */}
        <br />

        <FormControl>
          <FormLabel id='demo-row-radio-buttons-group-label'>
            Let's coose priority
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby='demo-row-radio-buttons-group-label'
            name='priority'>
            {priorityOptions.map((el) => (
              <FormControlLabel
                key={el}
                value={el}
                control={
                  <Radio
                    checked={priority === el}
                    onChange={handleChange}
                  />
                }
                disapled={priority === el}
                label={el}
              />
            ))}
          </RadioGroup>
        </FormControl>

        {/* <div>
          <label style={{ padding: '0 10px' }}>
            LOW
          
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
          
            <input
              type='radio'
              name='priority'
              value='heigh'
              checked={priority === 'heigh'}
              onChange={handleChange}
            />
          </label>
        </div> */}

        <Container>
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
        </Container>
        <Container>
          <Button type='submit' title='SUBMIT' />
        </Container>
      </form>
    );
  }
}

export default ToDoForm;
