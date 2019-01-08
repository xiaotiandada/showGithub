import React, { Component, Fragment } from "react";
import "./index.css";
import { Input, Avatar, Alert } from "antd";

const Search = Input.Search;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      headerStatus: false,
      message: "",
      type: "",
      inShow: false
    };
    this.toggleHeader = this.toggleHeader.bind(this);
    this.toggleAlertShow = this.toggleAlertShow.bind(this);
    this.searchValue = this.searchValue.bind(this);
  }

  toggleHeader() {
    const { toggleDetailShow } = this.props;
    this.setState({
      headerStatus: !this.state.headerStatus
    });
    toggleDetailShow();
  }

  searchValue(value) {
    if (!value) {
      this.toggleAlertShow("请输入用户名", "error");
      return;
    }
    this.setState({
      userName: value
    });
    this.toggleHeader();
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
          {" "}
          {this.state.inShow && (
            <Alert
              message={this.state.message}
              type={this.state.type}
              showIcon
            />
          )}{" "}
        </Fragment>
      );
    };

    const SearchDom = () => {
      return (
        <Fragment>
          {" "}
          {!this.state.headerStatus && (
            <Search
              className="search-input"
              size="large"
              placeholder="请输入Githun用户名"
              defaultValue={this.state.userName}
              onSearch={this.searchValue}
              enterButton
            />
          )}{" "}
        </Fragment>
      );
    };

    const AvatarAndNameDom = () => {
      return (
        <Fragment>
          {this.state.headerStatus && (
            <Fragment>
              <h1 className="user-name"> {this.state.userName} </h1>
              <Avatar onClick={this.toggleHeader} size="large" icon="user" />
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
      </Fragment>
    );
  }
}

export default App;
