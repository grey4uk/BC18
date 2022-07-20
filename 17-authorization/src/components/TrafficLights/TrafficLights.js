import { useReducer } from 'react';

import Button from 'components/Button/Button';

import { colors } from './colors';
import s from './TrafficLights.module.css';

const actionsTypes = {
  activeLight: 'activeLight',
  id: 'id',
};

const initialState = (initValue) => ({
  activeLight: initValue,
  id: null,
});

const reducer = (state, action) => {
  const { type, payload } = action;
  // {type:'activeLight',payload:colors[0].label}
  switch (type) {
    case actionsTypes.activeLight:
      return { ...state, activeLight: payload };
    case actionsTypes.id:
      return { ...state, id: payload };

    default:
      return state;
  }
};

const TrafficLights = ({ initValue = colors[0].label }) => {
  const [state, dispatch] = useReducer(
    reducer,
    initValue,
    initialState
  );
  const { activeLight, id } = state;

  // useEffect(() => {
  //   fetch('https://...')
  //     .then((res) => res.json())
  //     .then((res) => dispatch({ payload: res }));
  // }, []);

  // dispatch({
  //   type: actionsTypes.activeLight,
  //   payload: colors[0].label,
  // });

  const start = () => {
    let i = 0;

    const id = setInterval(() => {
      if (i < 3) {
        dispatch({
          type: actionsTypes.activeLight,
          payload: colors[i].label,
        });
        dispatch({
          type: actionsTypes.id,
          payload: id,
        });

        // this.setState({ activeLight: colors[i].label, id });
        i < 2 ? i++ : (i = 0);
      } else {
        clearInterval(id);
      }
    }, 1500);
  };

  const stop = () => {
    clearInterval(id);
  };

  return (
    <div
      className='container'
      style={{ flexDirection: 'column' }}>
      {/* <button type='button' onClick={iterator}>
          START
        </button> */}
      <div className={`container ${s.lightBox}`}>
        {colors.map((el) => (
          <div
            key={el.label}
            className={`${s.light} ${
              el.label === activeLight && s.active
            }`}
            style={{ backgroundColor: el.color }}></div>
        ))}
      </div>
      <div>
        <Button
          type='button'
          title='START'
          handleClick={start}
        />
        <Button
          type='button'
          title='STOP'
          handleClick={stop}
        />
      </div>
    </div>
  );
};

export default TrafficLights;
