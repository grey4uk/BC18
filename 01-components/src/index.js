import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// const Application = (
//   <div className='App'>
//     <h1>Hello, React</h1>
//   </div>
// );

// const layout = React.createElement('h1', {
//   id: '123',
//   children: 'Hello',
// });
// console.log('layout', layout);

// const breaks = '{';

const content = 'people';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <App block={content} />
  </React.StrictMode>
);
