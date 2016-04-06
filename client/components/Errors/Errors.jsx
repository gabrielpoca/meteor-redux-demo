import React, { Component, PropTypes } from 'react';

class ErrorsList extends Component {
  renderError(error, index) {
    return <li key={index}>{error.message}</li>;
  }

  render() {
    return <ul>{this.props.errors.map(this.renderError)}</ul>;
  }
}

ErrorsList.propTypes = {
  errors: PropTypes.array.isRequired,
};

export default ErrorsList;
