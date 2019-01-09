import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";

import App from "./page/index/index";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import store from "./store/index.js";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Fragment>
        <App />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={() => <h2>Home</h2>} />
        <Route path="/about/" component={() => <h2>about</h2>} />
        <Route path="/users/" component={() => <h2>users</h2>} />
      </Fragment>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
