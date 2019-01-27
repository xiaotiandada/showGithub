import { createStore, applyMiddleware } from "redux";
// import { persistStore, persistReducer } from "redux-persist";
import Reducer from "./reducer/index";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

let store = createStore(Reducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
