import React from 'react';
import Player from '../../player/player';

const withPlayers = (Component) => {
  return class WithPlayers extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activePlayer: 0
      };
    }

    render() {
      return (
        <Component
          {...this.props}
          renderPlayer={(src, id) => {
            return (
              <Player
                src={src}
                isPlaying={id === this.state.activePlayer}
                onClick={() => {
                  this.setState({activePlayer: this.state.activePlayer === id ? null : id});
                }}
              />
            );
          }}
        />
      );
    }
  };
};

export default withPlayers;
