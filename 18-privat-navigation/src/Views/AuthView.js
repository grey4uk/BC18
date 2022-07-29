import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Button,
  TextField,
  Grid,
  Container,
  FormControl,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';

import { signUp, logIn } from 'redux/auth/authOperations';
import GoogleForm from 'components/GoogleForm';

function AuthView() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [flag, setFlag] = useState(true);
  const [googleAuthLayout, setGoogleAuthLayout] =
    useState(null);

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

  // const navigateUser = () => {
  //   // navigate('/clicker');
  //   reset();
  // };

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
    dispatch(
      signUp({ email, password, navigateUser: reset })
    );
  };

  const onLogin = (e) => {
    e.preventDefault();
    dispatch(
      logIn({ email, password, navigateUser: reset })
    );
  };

  const navigateAuth = () => {
    // change flag on opposite
    setFlag(!flag);
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const authByGoogle = async () => {
    // await axios({
    //   url: 'https://kapusta-backend.goit.global/auth/register',
    //   method: 'post',
    //   mode: 'no-corse',
    //   data: { email, password },
    // });
    // const res = await axios(
    //   'https://kapusta-backend.goit.global/auth/google',
    //   {
    //     mode: 'no-corse',
    //     // headers: { 'Access-Control-Allow-Origin': '*' },
    //   }
    // )
    //   .then(({ data }) => setGoogleAuthLayout(data))
    //   .then((res) => console.log('res inside', res))
    //   .catch(console.log);
    // return res;
  };

  return (
    <>
      {googleAuthLayout ? (
        <GoogleForm googleAuthLayout={googleAuthLayout} />
      ) : (
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
            <Button
              type='submit'
              variant='contained'
              color='primary'
              style={classes.submit}
              // onClick={authByGoogle}
            >
              <a
                href='https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&client_id=665888736356-aq6fvfmau6mupt4nfbms5tfch0u2698i.apps.googleusercontent.com&prompt=consent&redirect_uri=https%3A%2F%2Fkapusta-backend.goit.global%2Fauth%2Fgoogle-redirect&response_type=code&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile'
                style={{
                  textDecoration: 'none',
                  color: 'white',
                }}>
                Google
              </a>
            </Button>
            <div
              className={classes.authNavigateText}
              onClick={navigateAuth}>
              <p>
                {flag ? 'go login >>' : 'go register >>'}
              </p>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

export default AuthView;
