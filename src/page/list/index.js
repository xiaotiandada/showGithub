import React, { Component, Fragment } from "react";

// redux
import { connect } from "react-redux";
import action from "../../store/action";

// antd
import { List, Avatar } from "antd";
import "./index.css";

// 组件
import SpinDomo from "../components/spin";

// api
import axios from "axios";
import Api from "../../services/get-user-info";
class ListDom extends Component {
  constructor() {
    super();
    this.state = {
      spinInShow: false
    };
  }
  // 得到用户信息
  getUserDetail(name) {
    this.setState({ spinInShow: true });
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
          let boolean =
            getUserInfo.status === 200 &&
            gerRepos.status === 200 &&
            getFollowers.status === 200 &&
            getFollowing.status === 200;
          if (boolean) {
            const { setUserInfo } = this.props;
            arrData.getUserInfo = getUserInfo.data;
            arrData.gerRepos = gerRepos.data;
            arrData.getFollowers = getFollowers.data;
            arrData.getFollowing = getFollowing.data;
            setUserInfo(arrData);
            this.props.history.push("/about");
          } else {
            console.log("失败");
          }
          this.setState({ spinInShow: false });
        })
      )
      .catch(err => {
        console.log(err);
        this.setState({ spinInShow: false });
      });
  }
  render() {
    const { userList } = this.props;
    return (
      <Fragment>
        >
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
                onClick={this.getUserDetail.bind(this, item.login)}
              />
            </List.Item>
          )}
        />
        <SpinDomo spinInShow={this.state.spinInShow} />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});
export default connect(
  mapStateToProps,
  action
)(ListDom);
