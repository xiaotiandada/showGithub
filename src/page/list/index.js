import React, { Component, Fragment } from "react";

// redux
import { connect } from "react-redux";

import { List, Avatar } from "antd";
import "./index.css";
class ListDom extends Component {
  render() {
    const { userList, getUserDetail } = this.props;
    return (
      <Fragment>
        <List
          className="user-list"
          itemLayout="horizontal"
          dataSource={userList}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.avatar_url} />}
                title={item.login}
                description={item.html_url}
                onClick={() => getUserDetail(item.login)}
              />
            </List.Item>
          )}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});
export default connect(mapStateToProps)(ListDom);
