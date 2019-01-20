import React, { Component, Fragment } from "react";
import { Avatar } from "antd";

import { Chart, Geom, Axis, Tooltip, Legend, Coord } from "bizcharts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.avatarClick = this.avatarClick.bind(this);
  }
  avatarClick() {
    const { sendData } = this.props;
    sendData(false, "");
  }

  // 获取仓库语言分类
  getLanguage(arr) {
    const languageArr = arr.map(item => item["language"]);
    const languageArrSet = [...new Set(languageArr)];
    return languageArrSet.filter(item => !!item);
  }

  render() {
    const { getUserInfo, gerRepos } = this.props.data;
    console.log(this.props);
    const LanguageTagDom = parpos => {
      return parpos["data"].map((item, index) => (
        <span className="language-tag" key={index}>
          {item}
        </span>
      ));
    };

    // 数据源
    const data = [
      { genre: "Sports", sold: 275, income: 2300 },
      { genre: "Strategy", sold: 115, income: 667 },
      { genre: "Action", sold: 120, income: 982 },
      { genre: "Shooter", sold: 350, income: 5271 },
      { genre: "Other", sold: 150, income: 3710 }
    ];

    // 定义度量
    const cols = {
      sold: { alias: "销售量" },
      genre: { alias: "游戏种类" }
    };

    return (
      <Fragment>
        <div className="detail-container">
          <div className="detail-base">
            <div className="detail-base-avatar">
              <img src={getUserInfo.avatar_url} alt="avatar" />
            </div>
            <Avatar
              src={getUserInfo.avatar_url}
              onClick={this.avatarClick}
              className="base-avatar"
              size={100}
              icon="user"
            />
            <h1 className="detail-base-user">{getUserInfo.name}</h1>
            <ul>
              <li>
                <span className="info-name">帐号</span>
                <span>{getUserInfo.login || "人家不想告诉你QAQ~"}</span>
              </li>
              <li>
                <span className="info-name">简介</span>
                <span>{getUserInfo.bio || "人家不想告诉你QAQ~"}</span>
              </li>
              <li>
                <span className="info-name">公司</span>
                <span>{getUserInfo.company || "人家不想告诉你QAQ~"}</span>
              </li>
              <li>
                <span className="info-name">地址</span>
                <span>{getUserInfo.location || "人家不想告诉你QAQ~"}</span>
              </li>
              <li>
                <span className="info-name">邮箱</span>
                <span>{getUserInfo.email || "人家不想告诉你QAQ~"}</span>
              </li>
              <li>
                <span className="info-name">网址</span>
                <span>
                  {getUserInfo.blog ? (
                    <a
                      target="_blank"
                      href={getUserInfo.blog}
                      rel="noopener noreferrer"
                    >
                      {getUserInfo.blog}
                    </a>
                  ) : (
                    "人家不想告诉你QAQ~"
                  )}
                </span>
              </li>
            </ul>
            <div className="language">
              <LanguageTagDom data={this.getLanguage(gerRepos)} />
            </div>
          </div>
          <div className="detail-user">
            <Chart width={600} height={400} data={data} scale={cols}>
              <Axis name="genre" />
              <Axis name="sold" />
              <Legend position="top" dy={-20} />
              <Tooltip />
              <Geom type="interval" position="genre*sold" color="genre" />
            </Chart>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
