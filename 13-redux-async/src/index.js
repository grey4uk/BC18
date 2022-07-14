// _____________REACT_18______________________
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import App from './App';
import { store, persistore } from 'redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const render = () =>
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate
          loading={<>Loading...</>}
          persistor={persistore}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );

render();

// store.subscribe(render);
