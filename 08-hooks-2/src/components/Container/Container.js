const Container = ({ addedStyle, children }) => {
  return (
    <div
      className='container'
      style={{ ...(addedStyle ? addedStyle : {}) }}>
      {children}
    </div>
  );
};

export default Container;
