import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';

import { isLogedSelector } from 'redux/auth/authSelectors';

import s from './Navigator.module.css';
import { logOut } from 'redux/auth/authOperations';

const toogleActive = (active) => {
  const { isActive } = active;
  return isActive ? s.active : s.unactive;
};

const Navigator = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoged = useSelector(isLogedSelector);

  const kickUser = () => navigate('/');

  const onLogOut = () => {
    dispatch(logOut(kickUser));
  };
  return (
    <>
      {isLoged && (
        <>
          <ul style={{ display: 'flex', gap: '20px' }}>
            <li className={s.linkLi}>
              <NavLink
                to='/clicker'
                className={toogleActive}>
                Clicker
              </NavLink>
            </li>
            <li className={s.linkLi}>
              <NavLink
                to='/lights'
                className={toogleActive}>
                TrafficLights
              </NavLink>
            </li>
            <li className={s.linkLi}>
              <NavLink to='/todos' className={toogleActive}>
                Todos
              </NavLink>
            </li>
            <li className={s.linkLi}>
              <NavLink
                to='/gallery'
                className={toogleActive}>
                Gallery
              </NavLink>
            </li>
          </ul>
          <Button
            type='button'
            variant='contained'
            color='primary'
            style={{
              margin: '5px',
            }}
            onClick={onLogOut}>
            Sign Out
          </Button>
        </>
      )}
    </>
  );
};

export default Navigator;
