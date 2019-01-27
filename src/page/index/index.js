import React, { Component, Fragment } from "react";
import "./index.css";

// antd
import { Input } from "antd";

// redux
import { connect } from "react-redux";
import action from "../../store/action/index";

// antd
const Search = Input.Search;

class IndexDom extends Component {
  constructor() {
    super();
    this.searchValue = this.searchValue.bind(this);
  }

  searchValue(userName) {
    const { setUserName, searchUserName } = this.props;
    if (!userName) return alert("请输入用户名");
    setUserName(userName);
    searchUserName(userName);
  }

  render() {
    const { userName } = this.props;
    return (
      <Fragment>
        <div className="search-name">
          <Search
            className="search-input"
            size="large"
            placeholder="请输入Githun用户名"
            defaultValue={userName}
            onSearch={this.searchValue}
            enterButton
          />
        </div>
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
