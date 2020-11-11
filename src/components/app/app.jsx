import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {MAX_MISTAKES_COUNT} from '../../app-constants';
import Welcome from '../welcome/welcome';
import SignIn from '../sign-in/sign-in';
import Game from '../game/game';
import Result from '../result/result';
import GameOver from '../game-over/game-over';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Welcome attempts={MAX_MISTAKES_COUNT} />
        </Route>
        <Route exact path ='/login'>
          <SignIn />
        </Route>
        <Route exact path='/game'>
          <Game attempts={MAX_MISTAKES_COUNT} />
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

export default App;
