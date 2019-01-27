import React, { Component, Fragment } from "react";
import "./index.css";

import { BackTop } from "antd";

import Base from "./base";
class InfoDom extends Component {
  render() {
    const { infoData } = this.props;
    return (
      <Fragment>
        <Base infoData={infoData} />
        <BackTop />
      </Fragment>
    );
  }
}

export default InfoDom;
