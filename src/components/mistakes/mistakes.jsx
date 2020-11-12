import React from 'react';
import PropTypes from 'prop-types';


const Mistakes = ({count}) => {
  let mistakesBar = new Array(count).fill(``);
  return (
    <div className="game__mistakes">
      {mistakesBar.map((element, i) => <div className="wrong" key={`mistke-${i}`} />)}
    </div>
  );
};

Mistakes.propTypes = {
  count: PropTypes.number.isRequired
};

export default Mistakes;
