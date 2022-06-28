import PropTypes from 'prop-types';

import css from './Section.module.css';

console.log('css :>> ', css);

const Section = ({ label, children }) => {
  return (
    <section className={css.section}>
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
