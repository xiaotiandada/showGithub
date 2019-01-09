import count from "./index1";
import text from "./index2";
import userName from "./user-name";
import { combineReducers } from "redux";

const list = {
  count,
  text,
  userName
};

export default combineReducers({
  ...list
});
