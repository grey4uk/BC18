import { useState } from 'react';
import {
  Navigate,
  useNavigate,
  useLocation,
} from 'react-router-dom';

const Post = ({ title, body }) => {
  const location = useLocation();
  console.log('location', location);
  // const navigate = useNavigate();
  const [logOut, setLogOut] = useState(false);
  const handleClose = () => {
    // navigate('/auth', { replace: false });
    setLogOut(true);
  };
  return (
    <>
      {logOut ? (
        <Navigate to={location.state.from} replace />
      ) : (
        <div>
          <h2>{title}</h2>
          <p>{body}</p>
          <button type='button' onClick={handleClose}>
            GO BACK
          </button>
        </div>
      )}
    </>
  );
};

export default Post;
