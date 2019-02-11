import React, { Component, Fragment } from "react";
import "./index.css";

// antd
import { Input } from "antd";

// redux
import { connect } from "react-redux";
import action from "../../store/action/index";

// 组件
import SpinDomo from "../components/spin";

// api
import Api from "../../services/get-user-info";

// antd
const Search = Input.Search;

class IndexDom extends Component {
  constructor() {
    super();
    this.state = {
      spinInShow: false
    };
    this.searchValue = this.searchValue.bind(this);
  }

  searchValue(userName) {
    const { setUserName } = this.props;
    if (!userName) return alert("请输入用户名");
    setUserName(userName);
    this.searchUserName(userName);
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
          const { setUserList } = this.props;
          setUserList(response["data"]["items"]);
          this.props.history.push("/list");
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

  render() {
    const { userName } = this.props;
    return (
      <Fragment>
        <Search
          className="search-input search-name"
          size="large"
          placeholder="请输入Githun用户名"
          defaultValue={userName}
          onSearch={this.searchValue}
          enterButton
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
)(IndexDom);
