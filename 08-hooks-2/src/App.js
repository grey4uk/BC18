import React, { useState } from 'react';

import Clicker from 'components/Clicker/Clicker';

import TrafficLights from 'components/TrafficLights/TrafficLights';
import Container from 'components/Container/Container';
import ToDosView from 'Views/ToDosView';
import AuthView from 'Views/AuthView';
import Button from 'components/Button/Button';
import GalleryView from 'Views/GalleryView';

import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import ClickerProvider from 'components/ClickerContext/ClickerContext';

const views = {
  clicker: <Clicker />,
  trafficLights: <TrafficLights />,
  todos: <ToDosView />,
  gallery: <GalleryView />,
};

const App = () => {
  // bad practice
  // const [appState, setAppState] = useState({
  //   component: null,
  //   isLogedIn: true,
  // });

  // const chooseView = ({ target: { name } }) => {
  //   setAppState((prev) => ({
  //     ...prev,
  //     component: views[name],
  //   }));
  // };
  // const { isLogedIn, component } = appState;

  // wrong usage
  // if (true) {
  //   const [flag, setFlag] = useState(false);
  // }

  const [component, setComponent] = useState(null);
  const [isLogedIn, setIsLogedIn] = useState(true);

  const chooseView = ({ target: { name } }) => {
    setComponent(views[name]);
  };

  return (
    <ErrorBoundary>
      <ClickerProvider>
        <Container addedStyle={{ flexDirection: 'column' }}>
          {isLogedIn ? (
            <Container addedStyle={{ gap: '5vw' }}>
              {Object.keys(views).map((el) => (
                <Button
                  key={el}
                  title={el}
                  handleClick={chooseView}
                />
              ))}
            </Container>
          ) : (
            <Container>
              <AuthView />
            </Container>
          )}

          <Container> {component}</Container>
        </Container>
      </ClickerProvider>
    </ErrorBoundary>
  );
};

export default App;
