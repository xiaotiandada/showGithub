import React, { Component, Fragment } from "react";

import Header from "./header/index";
import Detail from "./detail/index";

// import store from "../../store/index";
import { connect } from "react-redux";
import Action from "../../store/action/index";

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
    const { incremetn, decrement } = this.props;

    return (
      <Fragment>
        <Header toggleDetailShow={this.toggleDetailShow} />
        {this.state.detailShow && <Detail />}
        <p
          style={{
            color: "#fff"
          }}
        >
          {this.props.text} {this.props.count}
        </p>
        <button
          onClick={() => {
            console.log(this.props);
          }}
        >
          12312
        </button>
        <button onClick={() => incremetn()}> + </button>
        <button onClick={() => decrement()}> - </button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  count: state.count,
  text: state.text
});

export default connect(
  mapStateToProps,
  Action
)(App);
