import { createContext, useState } from 'react';

export const ClickerContext = createContext();

const Clickerprovider = ({ children }) => {
  const [click, setClick] = useState(0);

  const increase = () => {
    setClick(click + 1);
  };
  const decrease = () => {
    setClick(click - 1);
  };

  return (
    <ClickerContext.Provider
      value={{ click, increase, decrease }}>
      {children}
    </ClickerContext.Provider>
  );
};

export default Clickerprovider;
