import React, { Component, Fragment } from "react";

// 引入组件
import Header from "./header/index";
import Detail from "./detail/index";

import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userList: [],
      detailShow: false
    };
    this.toggleDetailShow = this.toggleDetailShow.bind(this);
    this.sendData = this.sendData.bind(this);
  }

  toggleDetailShow(detailShow) {
    this.setState({ detailShow });
  }
  sendData(res) {
    console.log(res);
    this.setState({
      userList: res.data.items
    });
  }

  render() {
    const data = [{ month: "Jan.", count: 69, city: "tokyo" }];
    const scale = {
      month: { alias: "Month" },
      count: { alias: "Sales" }
    };

    return (
      <Fragment>
        <Header
          toggleDetailShow={this.toggleDetailShow}
          sendData={this.sendData}
        />
        {this.state.detailShow && <Detail userList={this.state.userList} />}
        <Chart height={400} data={data} scale={scale} forceFit>
          <Axis title name="month" />
          <Axis title name="count" />
          <Legend />
          <Tooltip crosshairs={{ type: "rect" }} />
          <Geom type="interval" position="month*count" color="month" />
        </Chart>
      </Fragment>
    );
  }
}

export default App;
