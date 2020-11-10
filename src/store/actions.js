import {extend} from '../utils';
import {GAME_STEP_SIZE, MISTAKES_STEP_SIZE} from '../app-constants';

const incrementStep = {
  type: `INCREMENT_STEP`,
  act: (state) => extend(state, {step: state.step + GAME_STEP_SIZE})
};
const incrementMistakes = {
  type: `INCREMENT_MISTAKES`,
  act: (state) => extend(state, {mistakes: state.mistakes + MISTAKES_STEP_SIZE})
};
const resetGame = {
  type: `RESET_GAME`,
  act: (initialState) => extend({}, initialState)
};

export {
  incrementStep,
  incrementMistakes,
  resetGame
};
