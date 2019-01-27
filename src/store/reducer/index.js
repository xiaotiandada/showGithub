import userName from "./user-name";
import userList from "./user-list";
import { combineReducers } from "redux";

const list = {
  userName,
  userList
};

export default combineReducers({
  ...list
});
