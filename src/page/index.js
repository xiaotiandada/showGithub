import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
// 引入组件
import IndexDom from "./index/index";
import ListDom from "./list/index";
import DetailDom from "./info/index";

export default class Index extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route path="/" exact component={IndexDom} />
            <Route path="/list" exact component={ListDom} />
            <Route path="/about/" exact component={DetailDom} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}
