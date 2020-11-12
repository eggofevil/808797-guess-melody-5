import {initialState} from './initial-state';

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case `INCREMENT_STEP`:
  case `INCREMENT_MISTAKES`:
    return action.act(state);
  case `RESET_GAME`:
    return action.act(initialState);
  default:
    return state;
  }
};

export default reducer;
