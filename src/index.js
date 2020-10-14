import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import questions from './mocks/questions';

ReactDOM.render(
  <App attempts={3} questions={questions} />,
  document.getElementById(`root`)
);
