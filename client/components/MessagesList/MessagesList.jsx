import React, { Component, PropTypes } from 'react';

class MessagesList extends Component {
  renderMessage({ _id, text }, index) {
    return (
      <li key={index}>
        {text} <a href="#" onClick={() => this.props.onRemove(_id)}>Remove</a>
      </li>
    );
  }

  renderLoading() {
    return <p>Loading messages...</p>;
  }

  render() {
    if (!this.props.ready)
      return this.renderLoading();
    return <ul>{this.props.messages.map(this.renderMessage.bind(this))}</ul>;
  }
}

MessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  ready: PropTypes.bool,
};

export default MessagesList;
