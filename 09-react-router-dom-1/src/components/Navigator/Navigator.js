import { Link } from 'react-router-dom';

import { constants } from 'helpers';

const Navigator = () => {
  const { home, auth, posts } = constants;
  return (
    <ul>
      <li>
        <Link to={home}>HOME</Link>
        {/* <a href='/link1'>link1</a> */}
      </li>
      <li>
        <Link to={`/${auth}`}>AUTH</Link>
      </li>
      <li>
        <Link to={`/${posts}`}>POSTS</Link>
      </li>
    </ul>
  );
};

export default Navigator;
