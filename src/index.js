import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

ReactDOM.render(
  <App attempts={3} />,
  document.getElementById(`root`)
);
