import * as ActionType from '../action/actionTypes'
export default (state = 0, action) => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return state + 1;
    case ActionType.DECREMENT:
      return state - 1;
    default:
      return state;
  }
}