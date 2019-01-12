import React, { Component, Fragment } from "react";
import "./style/index.css";

import { BackTop } from "antd";

import Base from "./base";
import List from "./list";
class App extends Component {
  constructor() {
    super();
    this.state = {
      showBaseOrList: false
    };
    this.toggleBaseOrList = this.toggleBaseOrList.bind(this);
  }

  toggleBaseOrList(boolean) {
    this.setState({
      showBaseOrList: boolean
    });
  }

  render() {
    return (
      <Fragment>
        {this.state.showBaseOrList ? (
          <Base toggleBaseOrList={this.toggleBaseOrList} />
        ) : (
          <List
            toggleBaseOrList={this.toggleBaseOrList}
            dataChild={{ ...this.props }}
          />
        )}
        <BackTop />
      </Fragment>
    );
  }
}

export default App;
