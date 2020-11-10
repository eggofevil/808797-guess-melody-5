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

const Game = ({questions, step, onAnswer}) => {
  const question = questions[step];

  let GameType = question.type === `genre` ? WrappedGameGenre : WrappedGameArtist;
  return (
    <GameType question={question} onAnswer={onAnswer} />
  );
};

Game.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.oneOfType([genreQuestionPropTypes, artistQuestionPropTypes])).isRequired,
  step: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired,
  setMistakes: PropTypes.func.isRequired
};

export {Game};

const mapStateToProps = (state) => ({step: state.step});

const mapDispatchToProps = (dispatch) => ({
  onAnswer() {
    dispatch(incrementStep);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
