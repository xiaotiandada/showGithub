import React, { Component, Fragment } from "react";
import "./index.css";

// antd
import { Input, Avatar, Alert } from "antd";

// redux
import { connect } from "react-redux";
import action from "../../store/action/index";

// 接口
import Api from "../../services/get-user-info";

// components
import SpinDom from "../components/spin";
// antd
const Search = Input.Search;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSpin: false
    };
    this.searchValue = this.searchValue.bind(this);
  }

  // componentDidMount() {
  //   this.searchValue("xiaotiandada");
  // }

  searchValue(value) {
    const { setUserName } = this.props;
    if (!value) return alert("请输入用户名");
    setUserName(value);
  }

  render() {
    const { userName } = this.props;
    console.log(this.props);
    return (
      <Fragment>
        <header className="search-name">
          <Search
            className="search-input"
            size="large"
            placeholder="请输入Githun用户名"
            defaultValue={userName}
            onSearch={this.searchValue}
            enterButton
          />
        </header>
        <SpinDom showSpin={this.state.showSpin} />
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
)(App);
