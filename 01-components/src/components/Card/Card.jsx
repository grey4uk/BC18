import PropTypes from 'prop-types';
const Card = ({
  //   user,
  //   user: { userId, userName, usersFriends },
  userId,
  userName,
  usersFriends,
}) => {
  //   const { userId, userName, usersFriends } = user;
  return (
    <li>
      <h2>{userName}</h2>
      <span>{`{ ${userName}'s friends }`}</span>
      <ul>
        {usersFriends.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
      <button id={userId}>DELETE</button>
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
};

// type:PropTypes.oneOf(['active',"unactive",""])

export default Card;
