import { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useDispatch } from 'react-redux';

import { addTodoOperation } from 'redux/todos/operations';
import Button from 'components/Button/Button';
import Container from 'components/Container/Container';

export const priorityOptions = ['low', 'medium', 'high'];

const selectOptions = ['habits', 'activity', 'job'];

const ToDoForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const [priority, setPriority] = useState('low');
  const [category, setCategory] = useState('habits');

  const inputFocusRef = useRef(null);

  useEffect(() => {
    // console.log(
    //   'inputFocusRef?.current',
    //   inputFocusRef?.current
    // );
    inputFocusRef.current = 'low';
    // inputFocusRef?.current?.focus();
  }, [priority]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'completed':
        setCompleted(value);
        break;
      case 'priority':
        setPriority(value);
        break;
      case 'category':
        setCategory(value);
        break;

      default:
        break;
    }
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      title,
      description,
      completed,
      // priority,
      // category,
    };
    dispatch(addTodoOperation(todo));
    setTitle('');

    setDescription('');

    setCompleted(false);

    setPriority('low');

    setCategory('habit');
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <h1>Do you ready create a task?</h1>

      {/* <input placeholder='Focus try' ref={inputFocusRef} /> */}
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
              label={el}
            />
          ))}
        </RadioGroup>
      </FormControl>

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
};

export default ToDoForm;
