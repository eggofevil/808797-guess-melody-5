import React from 'react';
import PropTypes from 'prop-types';

const Welcome = ({attempts}) => {
  return (
    <div>
      <h1>Hello stranger!</h1>
      <p>You have {attempts} attempts left.</p>
    </div>
  );
};

Welcome.propTypes = {
  attempts: PropTypes.number.isRequired
};

export default Welcome;
