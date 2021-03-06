// _____________REACT_18______________________
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  // HashRouter,
  BrowserRouter,
} from 'react-router-dom';

import './index.css';
import './theme/themeStyles.css';
import App from './App';
import store, { persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  // <HashRouter>
  //   <Provider store={store}>
  //     <PersistGate loading={null} persistor={persistor}>
  //       <App />
  //     </PersistGate>
  //   </Provider>
  // </HashRouter>
  <BrowserRouter>
    {/* <React.StrictMode> */}
    {/* <HashRouter> */}

    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>

    {/* </HashRouter> */}
    {/* </React.StrictMode> */}
  </BrowserRouter>
);
