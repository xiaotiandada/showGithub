import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// 引入组件
import Header from "./header/index";
import Detail from "./detail/index";
import List from "./list/index";

// 接口
import Api from "../services/get-user-info";
import canceToken from "../services/cancel-token";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  async searchUser(name) {
    this.abortRequest();
    let query = {
      q: name,
      cancelToken: this.createCancelToken()
    };
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
    this.state.source && this.state.source.cancel();
  }

  render() {
    const { userName } = this.props;
    console.log(this.props, userName);
    // const HeaderDom = () => {
    //   return;
    // };
    const ListDom = () => {
      return <List data={this.state.data} />;
    };

    const DetailDom = () => {
      return <Detail />;
    };
    return (
      <Router>
        <Fragment>
          <Link to="/">Home</Link>
          <Link to="/about/">About</Link>
          <Link to="/users/">Users</Link>
          <Header toggleDetailShow={this.toggleDetailShow} />
          <Switch>
            <Route path="/" exact component={() => <h2>222</h2>} />
            <Route path="/about/" component={ListDom} />
            <Route path="/users/" component={DetailDom} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(App);
