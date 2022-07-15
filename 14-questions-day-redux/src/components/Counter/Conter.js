import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  increment,
  decrement,
  counterSelector,
} from 'redux/counter';

const Conter = () => {
  const [step, setStep] = useState(1);
  const counter = useSelector(counterSelector);
  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment(step));
  const handleDecrement = () => dispatch(decrement(step));

  return (
    <div className='container'>
      <div>
        <h1>{counter}</h1>
        <div
          style={{
            dispalay: 'flex',
            gap: '10px',
          }}>
          <div>
            <label>
              choose step
              <select
                name='step'
                onChange={({ target: { value } }) => {
                  console.log('value', value);
                  setStep(Number(value));
                }}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
              </select>
            </label>
          </div>
          <button
            className='button'
            type='button'
            onClick={handleDecrement}>
            -
          </button>
          <button
            className='button'
            type='button'
            onClick={handleIncrement}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Conter;
