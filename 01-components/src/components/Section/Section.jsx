import PropTypes from 'prop-types';

const Section = ({ label, children }) => {
  return (
    <section>
      {label ? <h1>{label}</h1> : null}
      {/* {label && <h1>{label}</h1>} */}
      {children}
    </section>
  );
};

Section.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
