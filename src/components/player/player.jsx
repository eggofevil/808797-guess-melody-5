import React from 'react';
import PropTypes from 'prop-types';

class Player extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isPlaying: props.isPlaying
    };
  }

  render() {
    return (
      <React.Fragment>
        <button className="track__button track__button--play" type="button" />
        <div className="track__status">
          <audio />
        </div>
      </React.Fragment>
    );
  }
}

Player.propTypes = {
  isPlaying: PropTypes.bool.isRequired
};

export default Player;
