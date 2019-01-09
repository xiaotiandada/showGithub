import React, { Component, Fragment } from "react";
import "./index.css";
import { List, Avatar } from "antd";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userProfileList: {
        name: "xiaotian",
        dec: "xiaotiandada",
        bio: "xxxxxxxxxxxxxx",
        company: "student",
        location: "chind",
        email: "www@qq.com",
        url: "sssssssssssss.com"
      }
    };
  }

  viewUserInfo(html_url, e) {
    console.log(html_url);
  }

  render() {
    // const ProfileDom = () => {
    //   let list = this.state.userProfileList;
    //   const listItem = Object.keys(list).map((item, index) => (
    //     <li key={index}>{list[item]}</li>
    //   ));
    //   return <ul>{listItem}</ul>;
    // };

    return (
      <Fragment>
        <div className="detail-container">
          {/* <div className="detail-base">
            <Avatar className="base-avatar" size={100} icon="user" />
            <ProfileDom />
          </div>
          <div className="detail-base">
            <Avatar className="base-avatar" size={100} icon="user" />
            <ProfileDom />
          </div>
          <div className="detail-base">
            <Avatar className="base-avatar" size={100} icon="user" />
            <ProfileDom />
          </div> */}
        </div>
        <List
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

export default App;
