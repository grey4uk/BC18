import React from 'react';

import Clicker from 'components/Clicker/Clicker';

import TrafficLights from 'components/TrafficLights/TrafficLights';
import Container from 'components/Container/Container';
import ToDosView from 'Views/ToDosView';
import AuthView from 'Views/AuthView';
import Button from 'components/Button/Button';

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
  state = { component: null, islogedIn: false };

  chooseView = ({ target: { name } }) => {
    this.setState({ component: views[name] });
  };

  render() {
    const { component } = this.state;
    const { chooseView } = this;
    return (
      <Container addedStyle={{ flexDirection: 'column' }}>
        <Container>
          <AuthView />
        </Container>
        <Container addedStyle={{ gap: '5vw' }}>
          {Object.keys(views).map((el) => (
            <Button
              key={el}
              title={el}
              handleClick={chooseView}
            />
          ))}
        </Container>
        <Container> {component}</Container>
      </Container>
    );
  }
}

export default App;
