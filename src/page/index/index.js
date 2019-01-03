import React, { Component } from "react";
import "./index.css";
import { DatePicker } from "antd";
import { Button } from "antd";

class App extends Component {
  render() {
    return (
      <div>
        <DatePicker />
        <Button type="primary"> Primary </Button>
      </div>
    );
  }
}

export default App;
