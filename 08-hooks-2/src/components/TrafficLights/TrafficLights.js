import Button from 'components/Button/Button';
import { Component } from 'react';
import { colors } from './colors';
import s from './TrafficLights.module.css';

class TrafficLights extends Component {
  state = {
    activeLight: colors[0].label,
    counter: 0,
    id: null,
  };

  start = () => {
    let i = 0;

    const id = setInterval(() => {
      if (i < 3) {
        this.setState({ activeLight: colors[i].label, id });
        i < 2 ? i++ : (i = 0);
      } else {
        clearInterval(id);
      }
    }, 1500);
  };

  stop = () => {
    clearInterval(this.state.id);
  };

  render() {
    const {
      start,
      stop,
      state,
      //  iterator
    } = this;

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
                el.label === state.activeLight && s.active
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
  }
}

export default TrafficLights;
