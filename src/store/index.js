import { createStore, applyMiddleware } from "redux";
import Reducer from "./reducer/index";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

let store = createStore(Reducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
