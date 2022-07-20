import { Component } from 'react';

class ErrorBoundary extends Component {
  state = { layoutError: '' };
  componentDidCatch(err, info) {
    if (err) {
      console.log('err', err.message);
      console.log('info', info);
      this.setState({ layoutError: 'Try again later' });
    }
  }
  render() {
    const { layoutError } = this.state;
    const { children } = this.props;
    return (
      <>{layoutError ? <h3>{layoutError}</h3> : children}</>
    );
  }
}

export default ErrorBoundary;
