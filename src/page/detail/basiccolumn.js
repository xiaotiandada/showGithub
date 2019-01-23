import React, { Component, Fragment } from "react";

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
  render() {
    const { data } = this.props;
    const cols = {
      count: {
        tickInterval: 20
      }
    };
    return (
      <Fragment>
        <Chart
          height={400}
          data={data}
          scale={cols}
          forceFit
          style={{
            width: "100%"
          }}
        >
          <Axis name="name" />
          <Axis name="count" />
          <Tooltip
            crosshairs={{
              type: "y"
            }}
          />
          <Geom type="interval" position="name*count" />
        </Chart>
      </Fragment>
    );
  }
}

export default App;
