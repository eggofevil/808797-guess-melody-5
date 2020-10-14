import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import GameGenre from '../game-genre/game-genre';
import GameArtist from '../game-artist/game-artist';

class Game extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      errorsCount: 0
    };
    this._onAnswer = this._onAnswer.bind(this);
  }

  _onAnswer(currentQuestion, userAnswers) { // Почему ниже, в пропсы компонента наименование этой функции спускается без нижнего подчеркивания???
    let result;
    if (Array.isArray(userAnswers)) {
      result = currentQuestion.answers.every((answer, i) => ((answer.genre === currentQuestion.genre) === userAnswers[i]));
    } else {
      result = currentQuestion.song.artist === userAnswers;
    }
    this.setState((currentState) => ({
      step: currentState.step + 1,
      errorsCount: currentState.errorsCount + !result
    }));
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
      return <GameGenre question={question} onAnswer={this._onAnswer} />;
    case `artist`:
      return <GameArtist question={question} onAnswer={this._onAnswer} />;
    }
    return <Redirect to="/" />;
  }
}

Game.propTypes = {
  questions: PropTypes.array.isRequired
};

export default Game;
