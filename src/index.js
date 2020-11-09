import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import questions from './mocks/questions';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducer';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

ReactDOM.render(
  <Provider store={store}>
    <App attempts={3} questions={questions} />
  </Provider>,
  document.getElementById(`root`)
);
