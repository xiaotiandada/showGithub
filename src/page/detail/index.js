import React, { Component, Fragment } from "react";
import "./style/index.css";

import { BackTop } from "antd";

import Base from "./base";
import List from "./list";
class App extends Component {
  constructor() {
    super();
    this.state = {
      showBaseOrList: false,
      data: Object.create(null)
    };
    this.sendData = this.sendData.bind(this);
  }

  sendData(boolean, data) {
    this.setState({
      showBaseOrList: boolean,
      data
    });
  }

  render() {
    return (
      <Fragment>
        {this.state.showBaseOrList ? (
          <Base sendData={this.sendData} data={this.state.data} />
        ) : (
          <List sendData={this.sendData} dataChild={{ ...this.props }} />
        )}
        <BackTop />
      </Fragment>
    );
  }
}

export default App;
