import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Welcome from '../welcome/welcome';
import SignIn from '../sign-in/sign-in';
import Game from '../game/game';
import GameArtist from '../game-artist/game-artist';
import GameGenre from '../game-genre/game-genre';
import Result from '../result/result';
import GameOver from '../game-over/game-over';

const App = ({attempts, questions}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Welcome attempts={attempts} />
        </Route>
        <Route exact path ='/login'>
          <SignIn />
        </Route>
        <Route exact path='/game'>
          <Game questions={questions} />
        </Route>
        <Route exact path='/dev-artist'>
          <GameArtist />
        </Route>
        <Route exact path='/dev-genre'>
          <GameGenre />
        </Route>
        <Route exact path='/result'>
          <Result />
        </Route>
        <Route exact path='/lose'>
          <GameOver />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  attempts: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired
};

export default App;
