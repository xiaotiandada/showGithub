import React, { Component, Fragment } from "react";
import { Spin } from "antd";

export default class SpinDom extends Component {
  render() {
    const { spinInShow } = this.props;
    return (
      <Fragment>
        {spinInShow && (
          <div
            style={{
              position: "fixed",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: "rgba(0,0,0,.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Spin size="large" />
          </div>
        )}
      </Fragment>
    );
  }
}
