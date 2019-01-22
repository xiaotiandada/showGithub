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
  constructor() {
    super();
  }

  render() {
    let data = [
      {
        date: "2017-05-01",
        commits: 1,
        month: 4,
        day: 1,
        week: "0"
      },
      {
        date: "2017-05-02",
        commits: 1,
        month: 4,
        day: 2,
        week: "0"
      },
      {
        date: "2017-05-03",
        commits: 1,
        month: 4,
        day: 3,
        week: "0"
      },
      {
        date: "2017-05-04",
        commits: 1,
        month: 4,
        day: 4,
        week: "0"
      },
      {
        date: "2017-05-05",
        commits: 1,
        month: 4,
        day: 5,
        week: "0"
      },
      {
        date: "2017-05-06",
        commits: 1,
        month: 4,
        day: 6,
        week: "0"
      },
      {
        date: "2017-05-07",
        commits: 1,
        month: 4,
        day: 0,
        week: "1"
      },
      {
        date: "2017-05-08",
        commits: 1,
        month: 4,
        day: 1,
        week: "1"
      },
      {
        date: "2017-05-09",
        commits: 1,
        month: 4,
        day: 2,
        week: "1"
      },
      {
        date: "2017-05-10",
        commits: 1,
        month: 4,
        day: 3,
        week: "1"
      },
      {
        date: "2017-05-11",
        commits: 1,
        month: 4,
        day: 4,
        week: "1"
      },
      {
        date: "2017-05-12",
        commits: 1,
        month: 4,
        day: 5,
        week: "1"
      },
      {
        date: "2017-05-13",
        commits: 1,
        month: 4,
        day: 6,
        week: "1"
      },
      {
        date: "2017-05-14",
        commits: 1,
        month: 4,
        day: 0,
        week: "2"
      },
      {
        date: "2017-05-15",
        commits: 1,
        month: 4,
        day: 1,
        week: "2"
      },
      {
        date: "2017-05-16",
        commits: 1,
        month: 4,
        day: 2,
        week: "2"
      },
      {
        date: "2017-05-17",
        commits: 1,
        month: 4,
        day: 3,
        week: "2"
      },
      {
        date: "2017-05-18",
        commits: 1,
        month: 4,
        day: 4,
        week: "2"
      },
      {
        date: "2017-05-19",
        commits: 1,
        month: 4,
        day: 5,
        week: "2"
      },
      {
        date: "2017-05-20",
        commits: 1,
        month: 4,
        day: 6,
        week: "2"
      },
      {
        date: "2017-05-21",
        commits: 1,
        month: 4,
        day: 0,
        week: "3"
      },
      {
        date: "2017-05-22",
        commits: 1,
        month: 4,
        day: 1,
        week: "3"
      },
      {
        date: "2017-05-23",
        commits: 1,
        month: 4,
        day: 2,
        week: "3"
      },
      {
        date: "2017-05-24",
        commits: 1,
        month: 4,
        day: 3,
        week: "3"
      },
      {
        date: "2017-05-25",
        commits: 1,
        month: 4,
        day: 4,
        week: "3",
        lastWeek: true
      },
      {
        date: "2017-05-26",
        commits: 1,
        month: 4,
        day: 5,
        week: "3",
        lastWeek: true
      },
      {
        date: "2017-05-27",
        commits: 1,
        month: 4,
        day: 6,
        week: "3",
        lastWeek: true
      },
      {
        date: "2017-05-28",
        commits: 1,
        month: 4,
        day: 0,
        week: "4",
        lastWeek: true
      },
      {
        date: "2017-05-29",
        commits: 1,
        month: 4,
        day: 1,
        week: "4",
        lastWeek: true
      },
      {
        date: "2017-05-30",
        commits: 1,
        month: 4,
        day: 2,
        week: "4",
        lastWeek: true
      },
      {
        date: "2017-05-31",
        commits: 1,
        month: 4,
        day: 3,
        week: "4",
        lastWeek: true,
        lastDay: true
      },
      {
        date: "2017-06-01",
        commits: 1,
        month: 5,
        day: 4,
        week: "4"
      },
      {
        date: "2017-06-02",
        commits: 1,
        month: 5,
        day: 5,
        week: "4"
      },
      {
        date: "2017-06-03",
        commits: 1,
        month: 5,
        day: 6,
        week: "4"
      },
      {
        date: "2017-06-04",
        commits: 1,
        month: 5,
        day: 0,
        week: "5"
      },
      {
        date: "2017-06-05",
        commits: 1,
        month: 5,
        day: 1,
        week: "5"
      },
      {
        date: "2017-06-06",
        commits: 1,
        month: 5,
        day: 2,
        week: "5"
      },
      {
        date: "2017-06-07",
        commits: 1,
        month: 5,
        day: 3,
        week: "5"
      },
      {
        date: "2017-06-08",
        commits: 1,
        month: 5,
        day: 4,
        week: "5"
      },
      {
        date: "2017-06-09",
        commits: 1,
        month: 5,
        day: 5,
        week: "5"
      },
      {
        date: "2017-06-10",
        commits: 1,
        month: 5,
        day: 6,
        week: "5"
      },
      {
        date: "2017-06-11",
        commits: 1,
        month: 5,
        day: 0,
        week: "6"
      },
      {
        date: "2017-06-12",
        commits: 1,
        month: 5,
        day: 1,
        week: "6"
      },
      {
        date: "2017-06-13",
        commits: 1,
        month: 5,
        day: 2,
        week: "6"
      },
      {
        date: "2017-06-14",
        commits: 1,
        month: 5,
        day: 3,
        week: "6"
      },
      {
        date: "2017-06-15",
        commits: 1,
        month: 5,
        day: 4,
        week: "6"
      },
      {
        date: "2017-06-16",
        commits: 1,
        month: 5,
        day: 5,
        week: "6"
      },
      {
        date: "2017-06-17",
        commits: 1,
        month: 5,
        day: 6,
        week: "6"
      },
      {
        date: "2017-06-18",
        commits: 1,
        month: 5,
        day: 0,
        week: "7"
      },
      {
        date: "2017-06-19",
        commits: 1,
        month: 5,
        day: 1,
        week: "7"
      },
      {
        date: "2017-06-20",
        commits: 1,
        month: 5,
        day: 2,
        week: "7"
      },
      {
        date: "2017-06-21",
        commits: 2,
        month: 5,
        day: 3,
        week: "7"
      },
      {
        date: "2017-06-22",
        commits: 6,
        month: 5,
        day: 4,
        week: "7"
      },
      {
        date: "2017-06-23",
        commits: 9,
        month: 5,
        day: 5,
        week: "7"
      },
      {
        date: "2017-06-24",
        commits: 3,
        month: 5,
        day: 6,
        week: "7",
        lastWeek: true
      },
      {
        date: "2017-06-25",
        commits: 3,
        month: 5,
        day: 0,
        week: "8",
        lastWeek: true
      },
      {
        date: "2017-06-26",
        commits: 1,
        month: 5,
        day: 1,
        week: "8",
        lastWeek: true
      },
      {
        date: "2017-06-27",
        commits: 7,
        month: 5,
        day: 2,
        week: "8",
        lastWeek: true
      },
      {
        date: "2017-06-28",
        commits: 7,
        month: 5,
        day: 3,
        week: "8",
        lastWeek: true
      },
      {
        date: "2017-06-29",
        commits: 12,
        month: 5,
        day: 4,
        week: "8",
        lastWeek: true
      },
      {
        date: "2017-06-30",
        commits: 9,
        month: 5,
        day: 5,
        week: "8",
        lastWeek: true,
        lastDay: true
      },
      {
        date: "2017-07-01",
        commits: 4,
        month: 6,
        day: 6,
        week: "8"
      },
      {
        date: "2017-07-02",
        commits: 1,
        month: 6,
        day: 0,
        week: "9"
      },
      {
        date: "2017-07-03",
        commits: 2,
        month: 6,
        day: 1,
        week: "9"
      },
      {
        date: "2017-07-04",
        commits: 7,
        month: 6,
        day: 2,
        week: "9"
      },
      {
        date: "2017-07-05",
        commits: 6,
        month: 6,
        day: 3,
        week: "9"
      },
      {
        date: "2017-07-06",
        commits: 1,
        month: 6,
        day: 4,
        week: "9"
      },
      {
        date: "2017-07-07",
        commits: 6,
        month: 6,
        day: 5,
        week: "9"
      },
      {
        date: "2017-07-08",
        commits: 1,
        month: 6,
        day: 6,
        week: "9"
      },
      {
        date: "2017-07-09",
        commits: 1,
        month: 6,
        day: 0,
        week: "10"
      },
      {
        date: "2017-07-10",
        commits: 1,
        month: 6,
        day: 1,
        week: "10"
      },
      {
        date: "2017-07-11",
        commits: 8,
        month: 6,
        day: 2,
        week: "10"
      },
      {
        date: "2017-07-12",
        commits: 5,
        month: 6,
        day: 3,
        week: "10"
      },
      {
        date: "2017-07-13",
        commits: 7,
        month: 6,
        day: 4,
        week: "10"
      },
      {
        date: "2017-07-14",
        commits: 4,
        month: 6,
        day: 5,
        week: "10"
      },
      {
        date: "2017-07-15",
        commits: 4,
        month: 6,
        day: 6,
        week: "10"
      },
      {
        date: "2017-07-16",
        commits: 2,
        month: 6,
        day: 0,
        week: "11"
      },
      {
        date: "2017-07-17",
        commits: 1,
        month: 6,
        day: 1,
        week: "11"
      },
      {
        date: "2017-07-18",
        commits: 10,
        month: 6,
        day: 2,
        week: "11"
      },
      {
        date: "2017-07-19",
        commits: 14,
        month: 6,
        day: 3,
        week: "11"
      },
      {
        date: "2017-07-20",
        commits: 6,
        month: 6,
        day: 4,
        week: "11"
      },
      {
        date: "2017-07-21",
        commits: 1,
        month: 6,
        day: 5,
        week: "11"
      },
      {
        date: "2017-07-22",
        commits: 6,
        month: 6,
        day: 6,
        week: "11"
      },
      {
        date: "2017-07-23",
        commits: 1,
        month: 6,
        day: 0,
        week: "12"
      },
      {
        date: "2017-07-24",
        commits: 1,
        month: 6,
        day: 1,
        week: "12"
      },
      {
        date: "2017-07-25",
        commits: 1,
        month: 6,
        day: 2,
        week: "12",
        lastWeek: true
      },
      {
        date: "2017-07-26",
        commits: 1,
        month: 6,
        day: 3,
        week: "12",
        lastWeek: true
      },
      {
        date: "2017-07-27",
        commits: 9,
        month: 6,
        day: 4,
        week: "12",
        lastWeek: true
      },
      {
        date: "2017-07-28",
        commits: 1,
        month: 6,
        day: 5,
        week: "12",
        lastWeek: true
      },
      {
        date: "2017-07-29",
        commits: 15,
        month: 6,
        day: 6,
        week: "12",
        lastWeek: true
      },
      {
        date: "2017-07-30",
        commits: 1,
        month: 6,
        day: 0,
        week: "13",
        lastWeek: true
      },
      {
        date: "2017-07-31",
        commits: 1,
        month: 6,
        day: 1,
        week: "13",
        lastWeek: true,
        lastDay: true
      },
      {
        date: "2017-08-01",
        commits: 15,
        month: 7,
        day: 2,
        week: "13"
      },
      {
        date: "2017-08-02",
        commits: 11,
        month: 7,
        day: 3,
        week: "13"
      },
      {
        date: "2017-08-03",
        commits: 3,
        month: 7,
        day: 4,
        week: "13"
      },
      {
        date: "2017-08-04",
        commits: 6,
        month: 7,
        day: 5,
        week: "13"
      },
      {
        date: "2017-08-05",
        commits: 1,
        month: 7,
        day: 6,
        week: "13"
      },
      {
        date: "2017-08-06",
        commits: 4,
        month: 7,
        day: 0,
        week: "14"
      },
      {
        date: "2017-08-07",
        commits: 1,
        month: 7,
        day: 1,
        week: "14"
      },
      {
        date: "2017-08-08",
        commits: 10,
        month: 7,
        day: 2,
        week: "14"
      },
      {
        date: "2017-08-09",
        commits: 11,
        month: 7,
        day: 3,
        week: "14"
      }
    ];

    Shape.registerShape("polygon", "boundary-polygon", {
      draw(cfg, container) {
        if (!Util.isEmpty(cfg.points)) {
          const attrs = {
            stroke: "#fff",
            lineWidth: 1,
            fill: cfg.color,
            fillOpacity: cfg.opacity
          };
          const points = cfg.points;
          const path = [
            ["M", points[0].x, points[0].y],
            ["L", points[1].x, points[1].y],
            ["L", points[2].x, points[2].y],
            ["L", points[3].x, points[3].y],
            ["Z"]
          ];
          attrs.path = this.parsePath(path);
          const polygon = container.addShape("path", {
            attrs
          });

          if (cfg.origin._origin.lastWeek) {
            const linePath = [
              ["M", points[2].x, points[2].y],
              ["L", points[3].x, points[3].y]
            ]; // 最后一周的多边形添加右侧边框

            container.addShape("path", {
              zIndex: 1,
              attrs: {
                path: this.parsePath(linePath),
                lineWidth: 1,
                stroke: "#404040"
              }
            });

            if (cfg.origin._origin.lastDay) {
              container.addShape("path", {
                zIndex: 1,
                attrs: {
                  path: this.parsePath([
                    ["M", points[1].x, points[1].y],
                    ["L", points[2].x, points[2].y]
                  ]),
                  lineWidth: 1,
                  stroke: "#404040"
                }
              });
            }
          }

          container.sort();
          return polygon;
        }
      }
    });
    const cols = {
      day: {
        type: "cat",
        values: [
          "星期日",
          "星期一",
          "星期二",
          "星期三",
          "星期四",
          "星期五",
          "星期六"
        ]
      },
      week: {
        type: "cat"
      },
      commits: {
        sync: true
      }
    };

    return (
      <Fragment>
        <Chart
          height={window.innerHeight}
          data={data}
          scale={cols}
          forceFit
          style={{
            width: "100%"
          }}
          padding={[window.innerHeight / 3, 20, window.innerHeight / 3, 80]}
        >
          <Tooltip title="date" />
          <Axis
            name="week"
            position="top"
            tickLine={null}
            line={null}
            label={{
              offset: 12,
              textStyle: {
                fontSize: 12,
                fill: "#666",
                textBaseline: "top"
              },
              formatter: val => {
                if (val === "2") {
                  return "MAY";
                } else if (val === "6") {
                  return "JUN";
                } else if (val === "10") {
                  return "JUL";
                } else if (val === "15") {
                  return "AUG";
                } else if (val === "19") {
                  return "SEP";
                } else if (val === "24") {
                  return "OCT";
                }

                return "";
              }
            }}
          />
          <Axis name="day" grid={null} />
          <Geom
            type="polygon"
            position="week*day*date"
            shape="boundary-polygon"
            color={["commits", "#BAE7FF-#1890FF-#0050B3"]}
          />
          <Coord reflect="y" />
        </Chart>
      </Fragment>
    );
  }
}

export default App;
