import React, { Component, Fragment } from "react";
import "./index.css";
import { List, Avatar } from "antd";
import { withRouter } from "react-router-dom";

class listDom extends Component {
  viewUserInfo(html_url) {
    console.log(html_url);
    this.props.history.push("/users");
  }
  render() {
    return (
      <Fragment>
        <List
          className="user-list"
          itemLayout="horizontal"
          dataSource={this.props.data}
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

export default withRouter(listDom);
