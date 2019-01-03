import React, { Component } from "react";
import "./index.css";
import { Input } from "antd";
import { Menu, Icon } from "antd";
import { Avatar } from "antd";

const Search = Input.Search;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <header className="search-name header">
        <Search
          style={{
            display: "none"
          }}
          size="large"
          placeholder="请输入Githun用户名"
          onSearch={value => console.log(value)}
          enterButton
        />
        <div className="avatar-img">
          <Avatar size="large" icon="user" />
        </div>
      </header>
    );
  }
}

export default App;
