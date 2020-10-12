import React from 'react';
import PropTypes from 'prop-types';

class GameGenre extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [false, false, false, false]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange(i) {
    this.setState((state) => {
      let newAnswers = state.answers;
      newAnswers[i] = !newAnswers[i];
      return {answers: newAnswers};
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onAnswer(this.props.question, this.state.answers);
  }

  render() {
    return (
      <section className="game game--genre">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
          </a>
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
          <h2 className="game__title">Выберите {this.props.question.genre} треки</h2>
          <form className="game__tracks" onSubmit = {this.handleSubmit}>
            {this.props.question.answers.map((answer, i) => (
              <div key={`${i}-${this.props.question.answers.src}`} className="track">
                <button className="track__button track__button--play" type="button" />
                <div className="track__status">
                  <audio />
                </div>
                <div className="game__answer">
                  <input
                    className="game__input visually-hidden"
                    type="checkbox"
                    name="answer"
                    value={`answer-${i}`}
                    id={`answer-${i}`}
                    checked={this.state.answers[i]}
                    onChange={() => (this.handleChange(i))}
                  />
                  <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
                </div>
              </div>
            ))}
            <button className="game__submit button" type="submit">Ответить</button>
          </form>
        </section>
      </section>
    );
  }
}

GameGenre.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    type: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired
  }).isRequired
};

export default GameGenre;
