// import { useLocation } from 'react-router-dom';

import { Link, Outlet } from 'react-router-dom';

import { constants } from 'helpers';

const AuthPage = () => {
  //   const location = useLocation();
  const { auth, login, register } = constants;

  //   console.log('clolocation', location);
  return (
    <div>
      <nav style={{ display: 'flex', gap: '10px' }}>
        <Link to={`/${auth}`}>LOGIN</Link>
        <Link to={`/${auth}/${register}`}>REGISTER</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default AuthPage;
