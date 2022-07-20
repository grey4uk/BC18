import React from 'react';
import { Routes, Route } from 'react-router-dom';

import TrafficLights from 'components/TrafficLights/TrafficLights';
import ToDosView from 'Views/ToDosView';
import AuthView from 'Views/AuthView';
import GalleryView from 'Views/GalleryView';

import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import ClickerProvider from 'components/ClickerContext/ClickerContext';
import Layout from 'components/Layout/Layout';
import ClickerView from 'Views/ClickerView';

const App = () => {
  return (
    <ErrorBoundary>
      <ClickerProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<AuthView />} />
            <Route
              path='clicker'
              element={<ClickerView />}
            />

            <Route
              path='lights'
              element={<TrafficLights />}
            />
            <Route path='todos' element={<ToDosView />} />
            <Route
              path='gallery'
              element={<GalleryView />}
            />
            <Route path='*' element={<AuthView />} />
          </Route>
        </Routes>
      </ClickerProvider>
    </ErrorBoundary>
  );
};

export default App;
