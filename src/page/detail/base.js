import React, { Component, Fragment } from "react";
import { Avatar, Tooltip } from "antd";

import Basiccolumn from "./basiccolumn";

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

  getRepos(arr) {
    let dataArr = [];
    arr.map(item => {
      if (item["stargazers_count"]) {
        dataArr.push({
          name: item["name"],
          count: item["stargazers_count"]
        });
      }
    });
    return dataArr;
  }

  render() {
    const {
      getUserInfo,
      gerRepos,
      getFollowers,
      getFollowing
    } = this.props.data;
    console.log(this.props);
    const LanguageTagDom = props => {
      return props["data"].map((item, index) => (
        <span className="language-tag" key={index}>
          {item}
        </span>
      ));
    };

    const FollowersDom = props => {
      return props.map((item, i) => (
        <Tooltip title={item["login"]} key={i}>
          <li>
            <a href={item["html_url"]} target="_blank">
              <img src={item["avatar_url"]} alt={item["login"]} />
            </a>
          </li>
        </Tooltip>
      ));
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
            <div className="detail-user__blocl">
              <div className="number">{getUserInfo["public_repos"]}</div>
              <div className="number">{getUserInfo["followers"]}</div>
              <div className="number">{getUserInfo["following"]}</div>
            </div>
            <Basiccolumn data={this.getRepos(gerRepos)} />
          </div>
          <div className="detail-info">
            <p className="detail-info__title">
              Followers - {getUserInfo["followers"]}
            </p>
            <ul className="followers-user">{FollowersDom(getFollowers)}</ul>

            <p className="detail-info__title">
              Following - {getUserInfo["following"]}
            </p>
            <ul className="followers-user">{FollowersDom(getFollowing)}</ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
