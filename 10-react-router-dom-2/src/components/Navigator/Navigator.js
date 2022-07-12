import { NavLink } from 'react-router-dom';

import { constants } from 'helpers';
import s from './Navigator.module.css';

const toogleActive = (active) => {
  // console.log('active', active);
  const { isActive } = active;
  return isActive ? s.active : s.unactive;
};

const Navigator = () => {
  const { layout, auth, posts } = constants;
  return (
    <ul style={{ display: 'flex', gap: '20px' }}>
      <li className={s.linkLi}>
        <NavLink to={layout} className={toogleActive}>
          HOME
        </NavLink>
        {/* <a href='/link1'>link1</a> */}
      </li>
      <li className={s.linkLi}>
        <NavLink to={`/${auth}`} className={toogleActive}>
          AUTH
        </NavLink>
      </li>
      <li className={s.linkLi}>
        <NavLink to={`/${posts}`} className={toogleActive}>
          POSTS
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigator;
