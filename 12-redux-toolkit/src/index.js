// _____________REACT_18______________________
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { store } from 'redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const render = () =>
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );

render();

// store.subscribe(render);
