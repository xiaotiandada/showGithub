import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer/index";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

// let store = createStore(Reducer, composeWithDevTools(applyMiddleware(logger)));

// export default store;

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web and AsyncStorage for react-native

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(logger)));
  let persistor = persistStore(store);
  return { store, persistor };
};
