import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLogedSelector } from 'redux/auth/authSelectors';

function PublicRoute({
  children,
  redirect = '/clicker',
  restricted = false,
}) {
  const isLogedOrNot = useSelector(isLogedSelector);
  const shoudRedirect = restricted && isLogedOrNot;

  return shoudRedirect ? (
    <Navigate to={redirect} replace />
  ) : (
    children
  );
}
// const PublicRoute = ({
//   children,
//   redirectTo = '/clicker',
//   restricted,
// }) => {
//   const isLoged = useSelector(isLogedSelector);
//   const isRestrict = isLoged && restricted;
//   return isRestrict ? (
//     <Navigate to={redirectTo} />
//   ) : (
//     children
//   );
// };

export default PublicRoute;
