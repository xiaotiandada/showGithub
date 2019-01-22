import React, { Component, Fragment } from "react";
import "./index.css";

// antd
import { Input, Avatar, Alert } from "antd";

// redux
import { connect } from "react-redux";
import action from "../../store/action/index";

// 接口
import Api from "../../services/get-user-info";
import cancelToken from "../../services/cancel-token";

// components
import SpinDom from "../components/spin";
const Search = Input.Search;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: this.props.userName,
      headerStatus: true,
      source: false,
      showSpin: false,
      message: "",
      type: "",
      inShow: false
    };
    this.toggleHeader = this.toggleHeader.bind(this);
    this.toggleAlertShow = this.toggleAlertShow.bind(this);
    this.searchValue = this.searchValue.bind(this);
  }

  componentDidMount() {
    this.searchValue("xiaotiandada");
  }

  searchValue(value) {
    const { setUserName } = this.props;
    if (!value) {
      this.toggleAlertShow("请输入用户名", "error");
      return false;
    }
    this.setState({
      userName: value
    });
    setUserName(value);
    this.searchUser(value);
  }

  async searchUser(name) {
    this.setState({ showSpin: true });
    this.abortRequest();
    let query = {
      q: name,
      cancelToken: this.createCancelToken()
    };
    await Api.searchUser(query)
      .then(response => {
        const { toggleDetailShow, sendData } = this.props;
        if (response.status === 200) {
          this.toggleHeader(true);
          toggleDetailShow(true);
          sendData(response);
          this.setState({ showSpin: false });
        } else {
          this.toggleHeader(false);
          toggleDetailShow(false);
          sendData([]);
          this.setState({ showSpin: false });
          console.log("失败");
        }
      })
      .catch(err => {
        this.setState({ showSpin: false });
        console.log(err);
      });
  }
  abortRequest() {
    this.state.source && this.state.source.cancel();
  }

  createCancelToken() {
    const source = cancelToken();
    this.setState({
      source
    });
    return source.token;
  }

  toggleHeader(boolean) {
    this.setState({
      headerStatus: boolean
    });
  }

  toggleAlertShow(val, type) {
    const toggleAlert = (message, type = "success") => {
      this.setState({
        message: message,
        type: type,
        inShow: !this.state.inShow
      });
    };
    toggleAlert(val, type);

    setTimeout(() => toggleAlert(""), 2000);
  }

  render() {
    const AlertDom = () => {
      return (
        <Fragment>
          {this.state.inShow && (
            <Alert
              message={this.state.message}
              type={this.state.type}
              showIcon
            />
          )}
        </Fragment>
      );
    };

    const SearchDom = () => {
      return (
        <Fragment>
          {!this.state.headerStatus && (
            <Search
              className="search-input"
              size="large"
              placeholder="请输入Githun用户名"
              defaultValue={this.state.userName}
              onSearch={this.searchValue}
              enterButton
            />
          )}
        </Fragment>
      );
    };

    const AvatarAndNameDom = () => {
      return (
        <Fragment>
          {this.state.headerStatus && (
            <Fragment>
              <h1 className="user-name"> {this.state.userName} </h1>
              <Avatar size="large" icon="user" />
            </Fragment>
          )}
        </Fragment>
      );
    };

    return (
      <Fragment>
        <header
          className={`search-name ${this.state.headerStatus && "active"}`}
        >
          <SearchDom />
          <AvatarAndNameDom />
        </header>
        <AlertDom />
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
