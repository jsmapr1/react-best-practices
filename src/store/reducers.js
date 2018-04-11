import { combineReducers } from 'redux';

function activeRatings(state={3: true}, action) {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        [action.name]: !state[action.name]
      }
    default:
      return state
  }
}

const photoApp = combineReducers({
  activeRatings
});
 
export default photoApp;
