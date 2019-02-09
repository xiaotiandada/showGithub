import * as ActionType from "../action/action-types";
import * as State from "../state/index";
export default (state = State.userInfo, action) => {
  switch (action.type) {
    case ActionType.SETUSERINFO:
      return action.value;
    case ActionType.REMOVEUSERINFO:
      return [];
    default:
      return state;
  }
};
