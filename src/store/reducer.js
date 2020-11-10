import {extend} from '../utils';
import {initialState} from './initial-state';
import {AppConstants} from '../app-constants';
const {GAME_STEP_SIZE, MISTAKES_STEP_SIZE} = AppConstants;

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case `INCREMENT_STEP`:
    return Object.assign({}, state, {step: state.step + 1});
  default:
    return state;
  }
};

export default reducer;
