import React from "react";
import { Chart, Geom, Axis, Tooltip, Coord, Legend, Guide } from "bizcharts";
import DataSet from "@antv/data-set";

export default class Donut extends React.Component {
  render() {
    const { DataView } = DataSet;
    const { Html } = Guide;
    const { data, title } = this.props;

    const dv = new DataView();
    dv.source(data).transform({
      type: "percent",
      field: "count",
      dimension: "name",
      as: "percent"
    });
    const cols = {
      percent: {
        formatter: val => {
          val = val * 100 + "%";
          return val;
        }
      }
    };

    console.log(this.props);
    let htmlStr = `<div style="color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;color: #eee;">${title}</div>`;
    const textStyle = {
      fill: "#eee"
    };
    return (
      <div>
        <Chart
          height={400}
          data={dv}
          scale={cols}
          padding={[0]}
          style={{
            boxSizing: "border-box",
            width: "50%",
            float: "left"
          }}
          forceFit
        >
          <Coord type={"theta"} radius={0.75} innerRadius={0.5} />
          <Axis name="percent" />
          <Legend
            position="right-center"
            offsetX={-100}
            textStyle={textStyle}
          />
          <Tooltip
            showTitle={false}
            itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
          />
          <Guide>
            <Html
              position={["50%", "50%"]}
              html={htmlStr}
              alignX="middle"
              alignY="middle"
            />
          </Guide>
          <Geom
            type="intervalStack"
            position="percent"
            color={["name", "#0089ff-#58abf2"]}
            tooltip={[
              "name*percent",
              (name, percent) => {
                percent = percent * 100 + "%";
                return {
                  name: name,
                  value: percent
                };
              }
            ]}
            style={{
              lineWidth: 1,
              stroke: "#fff"
            }}
          />
        </Chart>
      </div>
    );
  }
}
