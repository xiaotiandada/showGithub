import React, { Component, Fragment } from "react";
import { List, Avatar } from "antd";

class App extends Component {
  viewUserInfo(html_url) {
    const { toggleBaseOrList } = this.props;
    console.log(html_url);
    toggleBaseOrList(true);
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
                onClick={this.viewUserInfo.bind(this, item.html_url)}
              />
            </List.Item>
          )}
        />
      </Fragment>
    );
  }
}

export default App;
