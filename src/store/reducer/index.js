import count from "./index1";
import userName from "./user-name";
import {
  combineReducers
} from "redux";

const list = {
  count,
  userName
};

export default combineReducers({
  ...list
});