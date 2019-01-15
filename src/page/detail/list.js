import React, { Component, Fragment } from "react";
import { List, Avatar } from "antd";

// 接口
import Api from "../../services/get-user-info";
// import cancelToken from "../../services/cancel-token";

class App extends Component {
  constructor() {
    super();
    this.sendResponseData = this.sendResponseData.bind(this);
  }
  viewUserInfo(login) {
    console.log(login);
    this.getUserInfo(login);
  }

  async getUserInfo(name) {
    let params = name;
    await Api.getUnserInfo(params)
      .then(response => {
        if (response.status === 200) {
          this.sendResponseData(true, response.data);
        } else {
          console.log("失败");
        }
      })
      .catch(error => {
        console.log(error);
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
