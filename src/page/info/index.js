import React, { Component, Fragment } from "react";
import "./index.css";
// antd
import { BackTop, Avatar, Tooltip } from "antd";

// 组件
import Basiccolumn from "./basiccolumn";
import Dount from "./donut";

// redux
import { connect } from "react-redux";
import action from "../../store/action";

// util
import { isEmptyArray } from "../../util/util";
class InfoDom extends Component {
  constructor() {
    super();
    this.state = {
      isEmptyInfo: false
    };
  }
  // 在render前执行
  componentWillMount() {
    this.IsEmptyInfo();
  }
  // 获取仓库语言分类
  getLanguage(arr) {
    const languageArr = arr.map(item => item["language"]);
    const languageArrSet = [...new Set(languageArr)];
    return languageArrSet.filter(item => !!item);
  }

  // 得到储存库数据
  getRepos(arr) {
    let dataArr = [];
    arr.map(item => {
      if (item["stargazers_count"]) {
        dataArr.push({
          name: item["name"],
          count: item["stargazers_count"]
        });
      }
      return dataArr;
    });
    return this.reposSort(dataArr);
  }

  reposSort(arr) {
    return arr.sort((a, b) => {
      return b["count"] - a["count"];
    });
  }

  getFollowerAndFollowing(arr) {
    let dataArr = [];
    dataArr.push(
      {
        name: "followers",
        count: arr["followers"]
      },
      {
        name: "following",
        count: arr["following"]
      }
    );
    return dataArr;
  }
  // 是为空信息
  IsEmptyInfo() {
    const { userInfo } = this.props;
    if (isEmptyArray(userInfo)) {
      this.setState({
        isEmptyInfo: true
      });
      this.props.history.push("/");
      // return;
    }
  }
  render() {
    const { userInfo } = this.props;
    const { getUserInfo, gerRepos, getFollowers, getFollowing } = userInfo;

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
            <a
              href={item["html_url"]}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={item["avatar_url"]} alt={item["login"]} />
            </a>
          </li>
        </Tooltip>
      ));
    };
    return (
      <Fragment>
        {this.state.isEmptyInfo || (
          <div className="detail-container">
            <div className="detail-base">
              <div className="detail-base-avatar">
                <img src={getUserInfo["avatar_url"]} alt="avatar" />
              </div>
              <Avatar
                src={getUserInfo["avatar_url"]}
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
              <div className="user-dounts">
                <Dount data={this.getRepos(gerRepos)} title="Start比例" />
                <Dount
                  data={this.getFollowerAndFollowing(getUserInfo)}
                  title="关注/粉丝"
                />
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
        )}
        <BackTop />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});
export default connect(
  mapStateToProps,
  action
)(InfoDom);
