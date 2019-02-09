import * as ActionType from "../action/action-types";
import * as State from "../state/index";
export default (state = State.userList, action) => {
  switch (action.type) {
    case ActionType.SETUSERLIST:
      return action.value;
    case ActionType.REMOVEUSERLIST:
      return [];
    default:
      return state;
  }
};
