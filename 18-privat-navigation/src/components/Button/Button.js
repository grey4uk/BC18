import { memo } from 'react';

import s from './Button.module.css';

const Button = ({ type, title, style, handleClick }) => {
  return (
    <button
      className={s.button}
      type={type ? type : 'button'}
      name={title ? title : 'untitled'}
      onClick={handleClick ? handleClick : null}
      style={style ? style : {}}>
      {title ? title : 'untitled'}
    </button>
  );
};

export default memo(Button);
