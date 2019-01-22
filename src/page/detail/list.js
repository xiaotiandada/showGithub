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
    const getUserInfo = async name => {
      return await Api.getUserInfo(name);
    };
    // https://developer.github.com/v3/repos/#list-your-repositories
    const getRepos = async name => {
      return await Api.getRepos(name);
    };
    axios
      .all([getUserInfo(name), getRepos(name)])
      .then(
        axios.spread((getUserInfo, gerRepos) => {
          let arrData = Object.create(null);
          console.log(getUserInfo, gerRepos);
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
