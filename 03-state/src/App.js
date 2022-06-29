import React from 'react';

import Clicker from 'components/Clicker/Clicker';

import TrafficLights from 'components/TrafficLights/TrafficLights';
import Container from 'components/Container/Container';
import ToDosView from 'Views/ToDosView';

// const App = () => {
//   return (
//     <>
//       <Clicker value={5} type='cool' arr={[0, 1]} />
//       <TrafficLights />
//     </>
//   );
// };

// export default App;

const views = {
  clicker: <Clicker />,
  trafficLights: <TrafficLights />,
  todos: <ToDosView />,
};

class App extends React.Component {
  state = { component: null };

  chooseView = ({ target: { name } }) => {
    this.setState({ component: views[name] });
  };

  render() {
    const { component } = this.state;
    const { chooseView } = this;
    return (
      <Container addedStyle={{ flexDirection: 'column' }}>
        <Container>
          {Object.keys(views).map((el) => (
            <button key={el} name={el} onClick={chooseView}>
              {el}
            </button>
          ))}
        </Container>
        <Container> {component}</Container>
      </Container>
    );
  }
}

export default App;
