import React, { Component, Fragment } from "react";

import Header from "./header/index";
import Detail from "./detail/index";

import Api from "../../services/get-user-info";
import canceToken from "../../services/cancel-token";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailShow: false,
      data: [],
      userName: "",
      source: false
    };

    this.toggleDetailShow = this.toggleDetailShow.bind(this);
  }

  toggleDetailShow(name) {
    this.setState({
      userName: name
    });
    this.searchUser(name);
    this.setState({
      detailShow: !this.state.detailShow
    });
  }

  async searchUser(name) {
    this.abortRequest();
    let query = {
      q: name,
      cancelToken: this.createCancelToken()
    };
    console.log(1);
    await Api.searchUser(query)
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          this.setState({
            data: response.data.items
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  createCancelToken() {
    const source = canceToken();
    this.setState({
      source
    });
    return source.token;
  }

  abortRequest() {
    console.log(this.state.source);
    this.state.source && this.state.source.cancel();
  }

  render() {
    return (
      <Fragment>
        <Header toggleDetailShow={this.toggleDetailShow} />

        {this.state.detailShow && <Detail data={this.state.data} />}
      </Fragment>
    );
  }
}

export default App;
