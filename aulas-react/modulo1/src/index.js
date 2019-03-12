import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";

class Button extends Component {
  render() {
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
}

Button.defaultProps = {
  children: "Salvar"
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

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
