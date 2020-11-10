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

/*
constructor(props) {
  super(props);
  this.state = {
    step: 0,
    errorsCount: 0
  };
  this._onAnswer = this._onAnswer.bind(this);
}
*/
/*
if (step >= questions.length || !questions) {
  return <Redirect to='/' />;
}
*/
/*
const onAnswer = (currentQuestion, userAnswers) => { // Почему ниже, в пропсы компонента наименование этой функции спускается без нижнего подчеркивания???
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
};
*/

const Game = ({questions, step, setStep, setMistakes}) => {
  const question = questions[step];
  const onAnswer = (currentQuestion, userAnswers) => {
    setStep();
    let result = currentQuestion.type === `genre` ?
      currentQuestion.answers.every((answer, i) => ((answer.genre === currentQuestion.genre) === userAnswers[i])) :
      currentQuestion.song.artist === userAnswers;
    if (!result) {
      setMistakes();
    }
  };

  let GameType = question.type === `genre` ? WrappedGameGenre : WrappedGameArtist;
  return (
    <GameType question={question} onAnswer={onAnswer} />
  );
};

Game.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.oneOfType([genreQuestionPropTypes, artistQuestionPropTypes])).isRequired,
  step: PropTypes.number.isRequired,
  setStep: PropTypes.func.isRequired,
  setMistakes: PropTypes.func.isRequired
};

export {Game};

const mapStateToProps = (state) => ({step: state.step});

const mapDispatchToProps = (dispatch) => ({
  resetGame() {
    dispatch(resetGame());
  },
  setStep() {
    dispatch(incrementStep());
  },
  setMistakes() {
    dispatch(incrementMistakes());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
