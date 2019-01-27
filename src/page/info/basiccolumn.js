import React, { Component, Fragment } from "react";

import { Chart, Geom, Axis, Tooltip } from "bizcharts";

class App extends Component {
  render() {
    const { data } = this.props;
    const cols = {
      count: {
        tickInterval: 20
      }
    };
    const label = {
      textStyle: {
        fill: "#eee"
      },
      formatter(text, item, index) {
        let arr = text.slice(0, 6);
        if (arr.length >= 6) {
          return `${arr}...`;
        } else {
          return `${arr}`;
        }
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
          <Axis name="name" label={label} />
          <Axis name="count" label={label} />
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
