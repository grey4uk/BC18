import React from 'react';
import {
  Routes,
  Route,
  useSearchParams,
  Navigate,
} from 'react-router-dom';

import TrafficLights from 'components/TrafficLights/TrafficLights';
import ToDosView from 'Views/ToDosView';
import AuthView from 'Views/AuthView';
import GalleryView from 'Views/GalleryView';

import ErrorBoundary from 'components/ErrorBoundary/ErrorBoundary';
import ClickerProvider from 'components/ClickerContext/ClickerContext';
import Layout from 'components/Layout/Layout';
import ClickerView from 'Views/ClickerView';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';

const App = () => {
  const [searchParams] = useSearchParams();
  console.log(
    'accessToken>>>',
    searchParams.get('accessToken')
  );
  console.log(
    'refreshToken>>>',
    searchParams.get('refreshToken')
  );
  console.log('sid>>>', searchParams.get('sid'));
  return (
    <ErrorBoundary>
      <ClickerProvider>
        <Routes>
          <Route path='/auth' element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute
                  restricted={true}
                  // redirect='home'
                >
                  <AuthView />
                </PublicRoute>
              }
            />
            <Route
              path='clicker'
              element={
                <PrivateRoute>
                  <ClickerView />
                </PrivateRoute>
              }
            />

            <Route
              path='lights'
              element={
                <PrivateRoute>
                  <TrafficLights />
                </PrivateRoute>
              }
            />
            <Route
              path='todos'
              element={
                <PrivateRoute>
                  <ToDosView />
                </PrivateRoute>
              }
            />
            <Route
              path='gallery'
              element={
                <PrivateRoute redirect='/notFoundGallery'>
                  <GalleryView />
                </PrivateRoute>
              }
            />
            <Route
              path='notFoundGallery'
              element={
                <h1>Nothing not found for gallery</h1>
              }
            />
            <Route
              path='home'
              element={<h1>Hello dear friend!!</h1>}
            />
            <Route
              path='*'
              element={<Navigate to='/auth' />}
            />
          </Route>
          <Route
            path='*'
            element={<Navigate to='/auth' />}
          />
        </Routes>
      </ClickerProvider>
    </ErrorBoundary>
  );
};

export default App;
