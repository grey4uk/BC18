import PropTypes from 'prop-types';

import Card from '../Card';

const CardList = ({ users }) => {
  console.log('users in cardlist>>>', users);
  return (
    <ul>
      {users.map((user) => {
        const { id, name, friends } = user;
        return (
          <Card
            key={id}
            userId={id}
            userName={name}
            usersFriends={friends}
            //     user={user}
          />
        );
      })}
      {/* <li>
        <span>{users[0].Name}</span>
      </li>
      <li>
        <span>{users[1].Name}</span>
      </li>
      <li>
        <span>{users[2].Name}</span>
      </li> */}
    </ul>
  );
};

CardList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      friends: PropTypes.arrayOf(
        PropTypes.string.isRequired
      ).isRequired,
    }).isRequired
  ).isRequired,
};

export default CardList;
