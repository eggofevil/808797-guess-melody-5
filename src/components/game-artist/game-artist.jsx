import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreenLink from '../welcome-screen-link/welcome-screen-link';

import questionPropTypes from './artist-question-proptypes';

const GameArtist = ({question, onAnswer, renderPlayer}) => {
  return (
    <section className="game game--artist">
      <header className="game__header">
        <WelcomeScreenLink />
        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx={390} cy={390} r={370} style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
        </svg>
        <div className="game__mistakes">
          <div className="wrong" />
          <div className="wrong" />
          <div className="wrong" />
        </div>
      </header>
      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            {renderPlayer(question.song.src, 0)}
          </div>
        </div>
        <form className="game__artist">
          {question.answers.map((answer, i) => (
            <div key={`answer-${i}-key`} className="artist">
              <input
                className="artist__input visually-hidden"
                type="radio"
                name="answer"
                defaultValue={answer.artist}
                id={`answer-${i}`}
                onChange={() => (onAnswer(question, event.target.value))}
              />
              <label className="artist__name" htmlFor={`answer-${i}`}>
                <img className="artist__picture" src={answer.picture} alt={answer.artist} />
                {answer.artist}
              </label>
            </div>
          ))}
        </form>
      </section>
    </section>
  );
};


GameArtist.propTypes = {
  renderPlayer: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
  question: questionPropTypes
};

export default GameArtist;
