import React, { Component, Fragment } from "react";
import { List, Avatar } from "antd";

// 接口
import Api from "../../services/get-user-info";
// import cancelToken from "../../services/cancel-token";

import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.sendResponseData = this.sendResponseData.bind(this);
  }

  componentDidMount() {
    this.getUserDetail("xiaotiandada");
  }

  viewUserInfo(login) {
    this.getUserDetail(login);
  }

  // 得到用户信息
  getUserDetail(name) {
    let reposParams = {
      type: "owner",
      sort: "updated"
    };
    const getUserInfo = async name => await Api.getUserInfo(name);
    const getRepos = async name => await Api.getRepos(name, reposParams);
    const getFollowers = async name => await Api.getFollowers(name);
    const getFollowing = async name => await Api.getFollowing(name);

    axios
      .all([
        getUserInfo(name),
        getRepos(name),
        getFollowers(name),
        getFollowing(name)
      ])
      .then(
        axios.spread((getUserInfo, gerRepos, getFollowers, getFollowing) => {
          let arrData = Object.create(null);
          if (getUserInfo.status === 200) {
            arrData.getUserInfo = getUserInfo.data;
          } else {
            console.log("失败");
          }
          if (gerRepos.status === 200) {
            arrData.gerRepos = gerRepos.data;
          } else {
            console.log("失败");
          }

          if (getFollowers.status === 200) {
            arrData.getFollowers = getFollowers.data;
          } else {
            console.log("失败");
          }

          if (getFollowing.status === 200) {
            arrData.getFollowing = getFollowing.data;
          } else {
            console.log("失败");
          }
          this.sendResponseData(true, arrData);
        })
      )
      .catch(err => {
        console.log(err);
      });
  }

  sendResponseData(boolean, data) {
    const { sendData } = this.props;
    sendData(boolean, data);
  }

  render() {
    const { dataChild } = this.props;
    return (
      <Fragment>
        <List
          className="user-list"
          itemLayout="horizontal"
          dataSource={dataChild.userList}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar_url} />}
                title={item.login}
                description={item.html_url}
                onClick={this.viewUserInfo.bind(this, item.login)}
              />
            </List.Item>
          )}
        />
      </Fragment>
    );
  }
}

export default App;
