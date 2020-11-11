import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreenLink from '../welcome-screen-link/welcome-screen-link';

import questionPropTypes from './genre-question-proptypes';

class GameGenre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAnswers: [false, false, false, false],
    };
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(i) {
    this.setState((currentState) => {
      let newAnswers = currentState.userAnswers;
      newAnswers[i] = !newAnswers[i];
      return {userAnswers: newAnswers};
    });
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this.props.onAnswer(this.state.userAnswers);
  }

  render() {
    let {answers, genre} = this.props.question;
    let {children} = this.props;
    return (
      <section className="game game--genre">
        <header className="game__header">
          <WelcomeScreenLink />
          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx={390} cy={390} r={370} style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
          </svg>
          {children}
        </header>
        <section className="game__screen">
          <h2 className="game__title">Выберите {genre} треки</h2>
          <form className="game__tracks" onSubmit={this._handleSubmit}>
            {answers.map((answer, i) => {
              return (
                <div key={`answer-${i}-key`} className="track">
                  {this.props.renderPlayer(answer.src, i)}
                  <div className="game__answer">
                    <input
                      className="game__input visually-hidden"
                      type="checkbox"
                      name="answer"
                      value={`answer-${i}`}
                      id={`answer-${i}`}
                      checked={this.state.userAnswers[i]}
                      onChange={() => (this._handleChange(i))}
                    />
                    <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
                  </div>
                </div>
              );
            })}
            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

GameGenre.propTypes = {
  question: questionPropTypes,
  children: PropTypes.element.isRequired,
  renderPlayer: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default GameGenre;
