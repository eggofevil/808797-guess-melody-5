import React from 'react';
import Welcome from '../welcome/welcome';
import PropTypes from 'prop-types';

const App = ({attempts}) => <Welcome attempts = {attempts} />;

App.propTypes = {
  attempts: PropTypes.number.isRequired
};

export default App;
