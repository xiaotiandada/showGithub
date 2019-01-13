import React, { Component, Fragment } from "react";

// 引入组件
import Header from "./header/index";
import Detail from "./detail/index";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userList: [],
      detailShow: false
    };
    this.toggleDetailShow = this.toggleDetailShow.bind(this);
    this.sendData = this.sendData.bind(this);
  }

  toggleDetailShow(detailShow) {
    this.setState({ detailShow });
  }
  sendData(res) {
    this.setState({
      userList: res.data.items
    });
  }

  render() {
    return (
      <Fragment>
        <Header
          toggleDetailShow={this.toggleDetailShow}
          sendData={this.sendData}
        />
        {this.state.detailShow && <Detail userList={this.state.userList} />}
      </Fragment>
    );
  }
}

export default App;
