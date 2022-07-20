// _____________REACT_18______________________
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import './theme/themeStyles.css';
import App from './App';
import store from 'redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

// _____________REACT_17______________________
// import React from 'react';
// import ReactDOM from 'react-dom';
// import SimpleReactLightbox from 'simple-react-lightbox';
// import './index.css';
// import './theme/themeStyles.css';

// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <SimpleReactLightbox>
//       <App />
//     </SimpleReactLightbox>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
