import { useState, useRef, useEffect } from 'react';
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

// const initialState = {
//   title: '',
//   description: '',
//   completed: false,
//   priority: 'low',
//   category: 'habits',
// };

export const priorityOptions = ['low', 'medium', 'high'];

const selectOptions = ['habits', 'activity', 'job'];

const ToDoForm = ({ onSubmitForm }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const [priority, setPriority] = useState('low');
  const [category, setCategory] = useState('habits');

  const inputFocusRef = useRef(null);

  useEffect(() => {
    console.log(
      'inputFocusRef?.current',
      inputFocusRef?.current
    );
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

    // const title = e.currentTarget.elements[0].value;
    // const description = e.currentTarget.elements[1].value;
    // const todo = { title, description };
    const todo = {
      id: uuidv4(),
      title,
      // title:title,
      description,
      completed,
      priority,
      category,
    };
    // console.log('this.props', this.props);
    onSubmitForm(todo);

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

// class ToDoForm extends React.Component {
//   state = {
//     ...initialState,
//   };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({ [name]: value });
//     //     this.setState({ title: value });
//     //     this.setState({ description: value });
//   };
//   // handleChange =(name) => ({ target: { value } }) => {
//   //     this.setState({ [name]: value });
//   //     //     this.setState({ title: value });
//   //     //     this.setState({ description: value });
//   //   };

//   onHandleSubmit = (e) => {
//     e.preventDefault();

//     // const title = e.currentTarget.elements[0].value;
//     // const description = e.currentTarget.elements[1].value;
//     // const todo = { title, description };
//     const todo = { id: uuidv4(), ...this.state };
//     // console.log('this.props', this.props);
//     this.props.onSubmitForm(todo);
//     this.setState(initialState);
//     // e.currentTarget.reset();
//   };

//   render() {
//     const { title, description, priority } = this.state;
//     const { handleChange, onHandleSubmit } = this;
//     return (
//       <form onSubmit={onHandleSubmit}>
//         <h1>Do you ready create a task?</h1>
//         <Box
//           sx={{
//             width: 500,
//             maxWidth: '100%',
//             padding: '10px',
//           }}>
//           <TextField
//             fullWidth
//             label='Title'
//             id='fullWidth'
//             name='title'
//             value={title}
//             onChange={handleChange}
//           />
//         </Box>
//         <Box
//           sx={{
//             width: 500,
//             maxWidth: '100%',
//             padding: '10px',
//           }}>
//           <TextField
//             fullWidth
//             label='Description'
//             id='fullWidth'
//             name='description'
//             value={description}
//             onChange={handleChange}
//           />
//         </Box>

//         <FormControl>
//           <FormLabel id='demo-row-radio-buttons-group-label'>
//             Let's coose priority
//           </FormLabel>
//           <RadioGroup
//             row
//             aria-labelledby='demo-row-radio-buttons-group-label'
//             name='priority'>
//             {priorityOptions.map((el) => (
//               <FormControlLabel
//                 key={el}
//                 value={el}
//                 control={
//                   <Radio
//                     checked={priority === el}
//                     onChange={handleChange}
//                   />
//                 }
//                 label={el}
//               />
//             ))}
//           </RadioGroup>
//         </FormControl>

//         <Container>
//           <label>
//             Choose a category:
//             <select
//               name='category'
//               onChange={handleChange}
//               defaultValue={selectOptions[0]}>
//               {selectOptions.map((el, indx) => (
//                 <option
//                   // selected={indx === 0}
//                   key={el}
//                   value={el}>
//                   {el}
//                 </option>
//               ))}
//             </select>
//           </label>
//         </Container>
//         <Container>
//           <Button type='submit' title='SUBMIT' />
//         </Container>
//       </form>
//     );
//   }
// }

export default ToDoForm;
