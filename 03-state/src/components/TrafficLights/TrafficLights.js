import { Component } from 'react';
import { colors } from './colors';
import s from './TrafficLights.module.css';

class TrafficLights extends Component {
  state = {
    activeLight: colors[0].label,
    counter: 0,
    id: null,
  };

  // iterator = (event) => {
  //   const { target } = event;
  //   console.log('event init>>>',target);
  //   setTimeout(() => {
  //     console.log('event in timeout', target);
  //   }, 1000);
  //   // for (let i = 1; i <= 3; i++) {
  //   //   // this.setState({ counter: this.state.counter + 1 });
  //   //   this.setState((prev) => {
  //   //     console.log('prev.counter', prev.counter);
  //   //     return {
  //   //       counter: prev.counter + 1,
  //   //     };
  //   //   });
  //   //   console.log(
  //   //     'this.state.counter>>>>',
  //   //     this.state.counter
  //   //   );
  //   // }
  // };

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
        <div className='container'>
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
          <button type='button' onClick={start}>
            START
          </button>
          <button type='button' onClick={stop}>
            STOP
          </button>
        </div>
      </div>
    );
  }
}

export default TrafficLights;
