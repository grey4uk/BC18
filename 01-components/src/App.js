import PropTypes from 'prop-types';

import './App.css';
import users from './db/users.json';
import CardList from './components/CardList/CardList';
import Section from './components/Section/Section';

function App(props) {
  console.log('props', props);
  const { block = 'some future subject' } = props;
  return (
    <div className='App'>
      <Section label={`Hello, ${block}`}>
        <CardList users={users} />
      </Section>
    </div>
  );
}

App.propTypes = {
  block: PropTypes.string,
};

export default App;
