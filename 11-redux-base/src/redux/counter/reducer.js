import { incrementType, decrementType } from './types';

const init = { count: 5 };

const reducer = (state = init, { type, payload = 1 }) => {
  switch (type) {
    case incrementType:
      return { count: state.count + payload };
    case decrementType:
      return { count: state.count - payload };

    default:
      return state;
  }
};

export default reducer;
