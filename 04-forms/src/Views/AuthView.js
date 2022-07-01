import { Component } from 'react';
import {
  Button,
  TextField,
  Grid,
  Container,
  FormControl,
} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     minHeight: '100vh',
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 3),
//   },
//   formControl: {
//     minWidth: '100%',
//     marginTop: '2vh',
//   },
//   buttonsWrapper: {
//     display: 'flex',
//     justifyContent: 'space-around',
//     width: '60%',
//   },
//   authNavigateText: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     color: 'blue',
//   },
// }));

const initialState = {
  email: '',
  password: '',
  flag: true,
};

class AuthView extends Component {
  state = { ...initialState };

  classes = {
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

  handleChangeInput =
    (name) =>
    ({ target: { value } }) => {};

  onRegister = (e) => {
    e.preventDefault();
  };

  onLogin = (e) => {
    e.preventDefault();
  };

  handleSignOut = () => {};

  navigateAuth = () => {
    // change flag on opposite
    this.setState((prev) => ({ flag: !prev.flag }));
  };

  render() {
    const { email, password, flag } = this.state;
    const {
      handleChangeInput,
      onRegister,
      onLogin,
      navigateAuth,
      classes,
    } = this;
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
}

export default AuthView;
