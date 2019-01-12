import React, { Component, Fragment } from "react";
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
    this.avatarClick = this.avatarClick.bind(this);
  }
  avatarClick() {
    const { toggleBaseOrList } = this.props;
    toggleBaseOrList(false);
  }
  render() {
    const ProfileDom = () => {
      let list = this.state.userProfileList;
      const listItem = Object.keys(list).map((item, index) => (
        <li key={index}> {list[item]} </li>
      ));
      return <ul> {listItem} </ul>;
    };

    return (
      <Fragment>
        <div className="detail-container">
          <div className="detail-base">
            <Avatar
              onClick={this.avatarClick}
              className="base-avatar"
              size={100}
              icon="user"
            />
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
      </Fragment>
    );
  }
}

export default App;
