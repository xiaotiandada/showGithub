import * as Action from "./action-types";

export default {
  setUserName(val) {
    return {
      type: Action.SETUSERNAME,
      value: val
    };
  },
  removeUserName() {
    return {
      type: Action.REMOVEUSERNAME
    };
  },
  setUserList(val) {
    return {
      type: Action.SETUSERLIST,
      value: val
    };
  },
  removeUserList() {
    return {
      type: Action.REMOVEUSERLIST
    };
  },
  setUserInfo(val) {
    return {
      type: Action.SETUSERINFO,
      value: val
    };
  },
  removeUserInfo() {
    return {
      type: Action.REMOVEUSERINFO
    };
  }
};
