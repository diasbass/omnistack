import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import Button from "./Button";

class App extends Component {
  state = {
    counter: 0
  };
  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <Fragment>
        <h1>{this.state.counter}</h1>
        <Button onClick={this.handleClick}>Somar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
