import React, { Component, Fragment } from "react";

import Header from "./header/index";
import Detail from "./detail/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailShow: false
    };

    this.toggleDetailShow = this.toggleDetailShow.bind(this);
  }

  toggleDetailShow() {
    this.setState({
      detailShow: !this.state.detailShow
    });
  }

  render() {
    return (
      <Fragment>
        <Header toggleDetailShow={this.toggleDetailShow} />
        {this.state.detailShow && <Detail />}
      </Fragment>
    );
  }
}

export default App;
