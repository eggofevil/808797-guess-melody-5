import {initialState} from './initial-state';
import {incrementStep, incrementMistakes, resetGame} from './actions';


const reducer = (state = initialState, action) => {
  switch (action.type) {
  case `INCREMENT STEP`:
    return incrementStep(state);
  case `INCREMENT MISTAKES`:
    return incrementMistakes(state);
  case `RESET_GAME`:
    return resetGame();
  default:
    return state;
  }
};

export default reducer;
