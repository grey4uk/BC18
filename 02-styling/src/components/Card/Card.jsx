import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
// import { FaUserAstronaut } from 'react-icons/fa';
// import './Card.scss';
import s from './Card.module.css';
import { ReactComponent as FaUserAstronaut } from '../../assets/user-svgrepo-com.svg';
const Card = ({
  //   user,
  //   user: { userId, userName, usersFriends },
  userId,
  userName,
  usersFriends,
  inTheBase,
}) => {
  //   const { userId, userName, usersFriends } = user;
  return (
    <li
      className={
        inTheBase ? s.cardLiInBase : s.cardLiOutBase
      }>
      {/* <li className='container'> */}
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        {/* <FaUserAstronaut /> */}
        <FaUserAstronaut style={{ width: '20px' }} />
        <h2>{userName}</h2>
      </div>

      <span>{`{ ${userName}'s friends }`}</span>
      <ul>
        {usersFriends.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
      <Button variant='outlined' startIcon={<DeleteIcon />}>
        Delete
      </Button>
    </li>
  );
};

// Card.propTypes = {
//   user: PropTypes.shape({
//     userId: PropTypes.number.isRequired,
//     userName: PropTypes.string.isRequired,
//     usersFriends: PropTypes.arrayOf(
//       PropTypes.string.isRequired
//     ).isRequired,
//   }).isRequired,
// };
Card.propTypes = {
  userId: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  usersFriends: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  inTheBase: PropTypes.bool.isRequired,
};

// type:PropTypes.oneOf(['active',"unactive",""])

export default Card;
