import PropTypes from 'prop-types';

import users from './db/users.json';
import CardList from './components/CardList/CardList';
import Section from './components/Section/Section';

function App(props) {
  const {
    block = 'some future subject',
    init,
    size,
    styles,
  } = props;

  const appStyles = {
    container: {
      display: 'block',
      width: size === 'small' ? '40vw' : `${init}vw`,
      margin: '0 auto',
      background: size === 'small' ? 'green' : 'tomato',
    },
    // containerSmall: {
    //   display: 'block',
    //   width: `40vw`,
    //   margin: '0 auto',
    //   background: 'green',
    // },
  };
  console.log('props', props);

  return (
    <div
      style={{
        ...appStyles.container,
        ...styles,
        // ...(size === 'small'
        //   ? appStyles.containerSmall
        //   : appStyles.container),
        // ...styles,
      }}>
      <Section label={`Hello, ${block}`}>
        <CardList users={users} active={false} />
      </Section>
    </div>
  );
}

App.propTypes = {
  block: PropTypes.string,
  init: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
  styles: PropTypes.shape({
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default App;
