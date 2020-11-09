import {extend} from '../utils';
import {AppConstants} from '../app-constants';
import {initialState} from './initial-state';

const {GAME_STEP_SIZE, MISTAKES_STEP_SIZE} = AppConstants;

const incrementStep = (state) => extend(state, {step: state.step + GAME_STEP_SIZE});
const incrementMistakes = (state) => extend(state, {mistakes: state.mistakes + MISTAKES_STEP_SIZE});
const resetGame = () => extend({}, initialState);

export {
  incrementStep,
  incrementMistakes,
  resetGame
};
