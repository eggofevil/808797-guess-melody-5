import React from 'react';
import Greeting from '../greeting/greeting';
import PropTypes from 'prop-types';

const App = ({attempts}) => <Greeting attempts = {attempts} />;

App.propTypes = {
  attempts: PropTypes.number.isRequired
};

export default App;
