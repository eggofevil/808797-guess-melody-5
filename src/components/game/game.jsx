import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {incrementStep, incrementMistakes, resetGame} from '../../store/actions.js';
import GameGenre from '../game-genre/game-genre';
import GameArtist from '../game-artist/game-artist';
import withPlayers from '../hocks/with-players/with-players';


import genreQuestionPropTypes from '../game-genre/genre-question-proptypes';
import artistQuestionPropTypes from '../game-artist/artist-question-proptypes';

const WrappedGameGenre = withPlayers(GameGenre);
const WrappedGameArtist = withPlayers(GameArtist);

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
      return <WrappedGameGenre question={question} onAnswer={this._onAnswer} />;
    case `artist`:
      return <WrappedGameArtist question={question} onAnswer={this._onAnswer} />;
    }
    return <Redirect to="/" />;
  }
}

Game.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.oneOfType([genreQuestionPropTypes, artistQuestionPropTypes])).isRequired
};

export default Game;
