import React, { Component, Fragment } from "react";
import "./index.css";
import { Avatar } from "antd";

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

  render() {
    const ProfileDom = () => {
      let list = this.state.userProfileList;
      const listItem = Object.keys(list).map((item, index) => (
        <li key={index}>{list[item]}</li>
      ));
      return <ul>{listItem}</ul>;
    };

    return (
      <div className="detail-container">
        <div className="detail-base">
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
        </div>
      </div>
    );
  }
}

export default App;
