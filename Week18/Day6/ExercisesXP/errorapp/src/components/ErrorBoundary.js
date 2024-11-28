import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
    };
  }


  componentDidCatch = (error, errorInfo) => {
    console.log(error);
    console.log(errorInfo);
    this.setState({ error: error });
  };

  render() {
    if (this.state.error){ return (<details style={{ whiteSpace: 'pre-wrap' }}>
    {this.state.error && this.state.error.toString()}
    <br />
    {this.state.errorInfo.componentStack}
</details>);
  }
    return this.props.children;
  }
}
export default ErrorBoundary;