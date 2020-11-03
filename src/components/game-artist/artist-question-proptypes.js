import PropTypes from 'prop-types';

export default PropTypes.shape({
  type: PropTypes.string.isRequired,
  song: PropTypes.shape({
    artist: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  }).isRequired,
  answers: PropTypes.arrayOf(PropTypes.shape({
    picture: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
  })).isRequired
}).isRequired;
