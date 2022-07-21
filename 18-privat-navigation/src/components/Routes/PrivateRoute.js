import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLogedSelector } from 'redux/auth/authSelectors';

function PrivateRoute({ children, redirect = '/' }) {
  const isLogedOrNot = useSelector(isLogedSelector);
  return isLogedOrNot ? (
    children
  ) : (
    <Navigate to={redirect} replace />
  );
}

// const PrivateRoute = ({ children, redirectTo = '/' }) => {
//   const isLoged = useSelector(isLogedSelector);
//   return isLoged ? (
//     children
//   ) : (
//     <Navigate to={redirectTo} replace />
//   );
// };

export default PrivateRoute;
