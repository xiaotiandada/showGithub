import React, { Component, Fragment } from "react";
import { Avatar } from "antd";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: this.props.data
    };
    this.avatarClick = this.avatarClick.bind(this);
  }
  avatarClick() {
    const { sendData } = this.props;
    sendData(false, "");
  }
  render() {
    const { data } = this.props;
    console.log(this.props);
    return (
      <Fragment>
        <div className="detail-container">
          <div className="detail-base">
            <div className="detail-base-avatar">
              <img src={data.avatar_url} alt="avatar" />
            </div>
            <Avatar
              src={data.avatar_url}
              onClick={this.avatarClick}
              className="base-avatar"
              size={100}
              icon="user"
            />
            <h1 className="detail-base-user">{data.name}</h1>
            <ul>
              <li>
                <span className="info-name">帐号</span>
                <span>{data.login || "人家不想告诉你QAQ~"}</span>
              </li>
              <li>
                <span className="info-name">简介</span>
                <span>{data.bio || "人家不想告诉你QAQ~"}</span>
              </li>
              <li>
                <span className="info-name">公司</span>
                <span>{data.company || "人家不想告诉你QAQ~"}</span>
              </li>
              <li>
                <span className="info-name">地址</span>
                <span>{data.location || "人家不想告诉你QAQ~"}</span>
              </li>
              <li>
                <span className="info-name">邮箱</span>
                <span>{data.email || "人家不想告诉你QAQ~"}</span>
              </li>
              <li>
                <span className="info-name">网址</span>
                <span>
                  {data.blog ? (
                    <a
                      target="_blank"
                      href={data.blog}
                      rel="noopener noreferrer"
                    >
                      {data.blog}
                    </a>
                  ) : (
                    "人家不想告诉你QAQ~"
                  )}
                </span>
              </li>
            </ul>
          </div>
          <div className="detail-user" />
        </div>
      </Fragment>
    );
  }
}

export default App;
