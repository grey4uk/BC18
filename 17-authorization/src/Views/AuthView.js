import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  TextField,
  Grid,
  Container,
  FormControl,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import {
  signUp,
  logIn,
  logOut,
} from 'redux/auth/authOperations';

function AuthView() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [flag, setFlag] = useState(true);

  const classes = {
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
    },
    submit: {
      margin: '5px',
    },
    formControl: {
      minWidth: '100%',
      marginTop: '2vh',
    },
    buttonsWrapper: {
      display: 'flex',
      justifyContent: 'space-around',
      width: '60%',
    },
    authNavigateText: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'blue',
    },
  };

  const navigateUser = () => {
    navigate('/clicker');
    reset();
  };

  const handleChangeInput =
    (name) =>
    ({ target: { value } }) => {
      if (name === 'email') {
        setEmail(value);
      } else {
        setPassword(value);
      }
    };

  const onRegister = (e) => {
    e.preventDefault();
    dispatch(signUp({ email, password, navigateUser }));
  };

  const onLogin = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password, navigateUser }));
  };

  const navigateAuth = () => {
    // change flag on opposite
    setFlag(!flag);
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Container
      component='main'
      maxWidth='xs'
      style={classes.paper}>
      <h1>{flag ? 'REGISTER' : 'LOGIN'}</h1>
      <Grid item xs={12}>
        <FormControl
          variant='outlined'
          style={classes.formControl}>
          <TextField
            autoComplete={email || 'Email'}
            name='email'
            variant='outlined'
            required
            fullWidth
            id='email'
            label='Email'
            value={email}
            onChange={handleChangeInput('email')}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl
          variant='outlined'
          style={classes.formControl}>
          <TextField
            autoComplete={password || 'Password'}
            name='password'
            variant='outlined'
            required
            fullWidth
            id='password'
            label='Password'
            value={password}
            onChange={handleChangeInput('password')}
          />
        </FormControl>
      </Grid>
      <div className={classes.buttonsWrapper}>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          style={classes.submit}
          onClick={flag ? onRegister : onLogin}>
          {flag ? 'REGISTER' : 'LOGIN'}
        </Button>
        <div
          className={classes.authNavigateText}
          onClick={navigateAuth}>
          <p>{flag ? 'go login >>' : 'go register >>'}</p>
        </div>
      </div>
    </Container>
  );
}

export default AuthView;
