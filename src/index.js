import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";

import App from "./page/index";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import ReducerConfigStore from "./store/index";

import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = ReducerConfigStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
