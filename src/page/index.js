import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// 引入组件
import Index from "./index/index";
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
    const IndexDom = () => (
      <Index
        toggleDetailShow={this.toggleDetailShow}
        sendData={this.sendData}
      />
    );
    const AboutDom = () => <Detail userList={this.state.userList} />;
    return (
      <Router>
        <Fragment>
          <Route path="/" exact component={IndexDom} />
          <Route path="/about/" component={AboutDom} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
