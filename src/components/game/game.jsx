import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import * as actions from '../../store/actions.js';
import GameGenre from '../game-genre/game-genre';
import GameArtist from '../game-artist/game-artist';
import withPlayers from '../hocks/with-players/with-players';


import genreQuestionPropTypes from '../game-genre/genre-question-proptypes';
import artistQuestionPropTypes from '../game-artist/artist-question-proptypes';

const WrappedGameGenre = withPlayers(GameGenre);
const WrappedGameArtist = withPlayers(GameArtist);
const mapStateToProps = (state) => ({step: state.step});

const mapDispatchToProps = (dispatch) => ({
  incrementStep() {
    dispatch(actions.incrementStep);
  },
  incrementMistakes() {
    dispatch(actions.incrementMistakes);
  },
  resetGame() {
    dispatch(actions.resetGame);
  }
});

const Game = ({questions, step, incrementStep, incrementMistakes, resetGame}) => {
  const question = questions[step];
  if (step >= questions.length || !question) {
    resetGame();
    return <Redirect to="/" />;
  }

  const onAnswer = (userAnswers) => {
    incrementStep();
    let result = question.type === `genre` ?
      question.answers.every((answer, i) => ((answer.genre === question.genre) === userAnswers[i])) :
      question.song.artist === userAnswers;
    if (!result) {
      incrementMistakes();
    }
  };

  let GameType = question.type === `genre` ? WrappedGameGenre : WrappedGameArtist;
  return <GameType question={question} onAnswer={onAnswer} />;
};

Game.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.oneOfType([genreQuestionPropTypes, artistQuestionPropTypes])).isRequired,
  step: PropTypes.number.isRequired,
  incrementStep: PropTypes.func.isRequired,
  incrementMistakes: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired
};

export {Game};
export default connect(mapStateToProps, mapDispatchToProps)(Game);
