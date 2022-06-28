import PropTypes from 'prop-types';

// import './CardList.css';

import Card from '../Card';
import { CardListUl } from './CardList.styled';

const CardList = ({ users, active = false }) => {
  console.log('users in cardlist>>>', users);
  return (
    <CardListUl active={active}>
      {users.map((user) => {
        const { id, name, friends, inTheBase } = user;
        return (
          <Card
            key={id}
            userId={id}
            userName={name}
            usersFriends={friends}
            inTheBase={inTheBase}
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
    </CardListUl>
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
      inTheBase: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  active: PropTypes.bool,
};

export default CardList;
