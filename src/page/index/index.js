import React, { Component } from "react";
import "./index.css";
import { Input } from "antd";
import { Avatar } from "antd";

const Search = Input.Search;

class App extends Component {
  constructor() {
    super();
    this.state = {
      headerStatus: false,
      current: "mail"
    };
    this.toggleHeader = this.toggleHeader.bind(this);
  }

  toggleHeader() {
    this.setState({
      headerStatus: !this.state.headerStatus
    });
  }

  render() {
    return (
      <header
        className={`search-name ${this.state.headerStatus ? "active" : ""}`}
      >
        <Search
          className={`search-input ${!this.state.headerStatus ? "active" : ""}`}
          size="large"
          placeholder="请输入Githun用户名"
          onSearch={value => {
            this.toggleHeader();
            console.log(value);
          }}
          enterButton
        />
        <div
          className={`avatar-img ${this.state.headerStatus ? "active" : ""}`}
        >
          <Avatar onClick={this.toggleHeader} size="large" icon="user" />
        </div>
      </header>
    );
  }
}

export default App;
