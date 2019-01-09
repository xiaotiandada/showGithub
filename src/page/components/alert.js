import React, { Component, Fragment } from "react";
import { Alert } from "antd";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      type: "",
      inShow: false
    };
    this.toggleAlertShow = this.toggleAlertShow.bind(this);
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
    return (
      <Fragment>
        {this.state.inShow && (
          <Alert message={this.state.message} type={this.state.type} showIcon />
        )}
      </Fragment>
    );
  }
}

export default App;
