import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// 引入组件
import IndexDom from "./index/index";
import ListDom from "./list/index";
import DetailDom from "./info/index";

import SpinDomo from "./components/spin";

// api
import axios from "axios";
import Api from "../services/get-user-info";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userList: [],
      infoData: Object.create(null),
      spinInShow: false
    };
    this.searchUserName = this.searchUserName.bind(this);
    this.getUserDetail = this.getUserDetail.bind(this);
  }

  // 搜素用户
  async searchUserName(userName) {
    this.setState({ spinInShow: true });
    // 返回搜索用户列表
    let query = {
      q: userName
    };
    await Api.searchUser(query)
      .then(response => {
        if (response.status === 200) {
          this.setState({ userList: response["data"]["items"] });
        } else {
          console.log("失败");
        }
        this.setState({ spinInShow: false });
      })
      .catch(err => {
        console.log(err);
        this.setState({ spinInShow: false });
      });
  }

  // 得到用户信息
  getUserDetail(name) {
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
            arrData.getUserInfo = getUserInfo.data;
            arrData.gerRepos = gerRepos.data;
            arrData.getFollowers = getFollowers.data;
            arrData.getFollowing = getFollowing.data;
            this.setState({ infoData: arrData });
          } else {
            console.log("失败");
          }
        })
      )
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const IndexRouteDom = () => (
      <IndexDom searchUserName={this.searchUserName} />
    );
    const ListRouteDom = () => (
      <ListDom
        userList={this.state.userList}
        getUserDetail={this.getUserDetail}
      />
    );
    const AboutRouteDom = () => <DetailDom infoData={this.state.infoData} />;
    return (
      <Fragment>
        <Router>
          <Fragment>
            <Link to="/">Home</Link>
            <Link to="/list/">list</Link>
            <Link to="/about/">Users</Link>
            <Switch>
              <Route path="/" exact component={IndexRouteDom} />
              <Route path="/list" exact component={ListRouteDom} />
              <Route path="/about/" component={AboutRouteDom} />
            </Switch>
          </Fragment>
        </Router>
        <SpinDomo spinInShow={this.state.spinInShow} />
      </Fragment>
    );
  }
}

export default App;
