import React from 'react';
import PropTypes from 'prop-types';

class Player extends React.PureComponent {
  constructor(props) {
    super(props);
    this._audio = React.createRef();
    this.state = {
      isLoading: true,
    };
    this._handleClick = this._handleClick.bind(this);
  }

  componentDidMount() {
    let audio = this._audio.current;
    audio.src = this.props.src;
    audio.oncanplaythrough = () => this.setState({isLoading: false});
    if (this.props.isPlaying) {
      audio.play();
    }
  }

  componentDidUpdate() {
    let audio = this._audio.current;
    if (this.props.isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  componentWillUnmount() {
    let audio = this._audio.current;
    audio.oncanplaythrough = null;
  }

  _handleClick() {
    this.props.handlePlayButtonClick(this.props.id);
  }

  render() {
    let {isLoading} = this.state;
    let {isPlaying} = this.props;
    return (
      <React.Fragment>
        <button
          className={`track__button track__button--${isPlaying ? `play` : `pause`}`}
          onClick={this._handleClick}
          type="button"
          disabled = {isLoading}
        />
        <div className="track__status">
          <audio ref={this._audio} />
        </div>
      </React.Fragment>
    );
  }
}

Player.propTypes = {
  isPlaying: PropTypes.bool,
  id: PropTypes.number.isRequired,
  handlePlayButtonClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired
};

export default Player;
