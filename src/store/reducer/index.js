import userName from "./user-name";
import userList from "./user-list";
import userInfo from "./user-info";
import { combineReducers } from "redux";

const reducerList = {
  userName,
  userList,
  userInfo
};

export default combineReducers({
  ...reducerList
});
