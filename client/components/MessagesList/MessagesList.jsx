import React, { Component, PropTypes } from 'react';

class MessagesList extends Component {
  renderMessage(message, index) {
    return <li key={index}>{message.text}</li>;
  }

  render() {
    return <ul>{this.props.messages.map(this.renderMessage)}</ul>;
  }
}

MessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default MessagesList;
