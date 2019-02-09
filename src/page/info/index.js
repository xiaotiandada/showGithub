import React, { Component, Fragment } from "react";
import "./index.css";

import { BackTop } from "antd";

import Base from "./base";
class InfoDom extends Component {
  class() {
    this.getInfoData = this.getInfoData.bind(this);
  }

  getInfoData() {
    const { infoData } = this.props;
    const isEmptyArray = arr => Array.isArray(arr) && arr.length === 0;
    if (isEmptyArray(infoData)) {
      alert("空数据");
    }
    console.log(infoData);
    return infoData;
  }
  render() {
    return (
      <Fragment>
        <Base infoData={this.getInfoData()} />
        <BackTop />
      </Fragment>
    );
  }
}

export default InfoDom;
