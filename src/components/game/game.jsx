import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import GameGenre from '../game-genre/game-genre';
import GameArtist from '../game-artist/game-artist';

class Game extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      step: 0
    };
    const onAnswer = () => {
      this.setState((state) => ({
        step: state.step + 1
      }));
    };
    this.onAnswer = onAnswer.bind(this);
  }
  render() {
    const {step} = this.state;
    const {questions} = this.props;
    const question = questions[step];

    if (step >= questions.length || !questions) {
      return <Redirect to='/' />;
    }
    switch (question.type) {
    case `genre`:
      return <GameGenre question={question} onAnswer={this.onAnswer} />;
    case `artist`:
      return <GameArtist question={question} onAnswer={this.onAnswer} />;
    }
    return <Redirect to="/" />;
  }
}

Game.propTypes = {
  questions: PropTypes.array.isRequired
};

export default Game;
