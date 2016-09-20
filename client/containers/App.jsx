import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage, removeMessage } from '../actions/actions';
import { reset } from 'redux-form';

import { SubscriptionComponent } from 'meteor-ditto';
import MessagesList from '../components/MessagesList/MessagesList';
import MessagesEditor from '../components/MessagesEditor/MessagesEditor';
import Errors from '../components/Errors/Errors';

class App extends Component {
  componentWillMount() {
    this.props.subscribe('messages');
  }

  handleSubmit(fields) {
    this.props.createMessage(fields);
    this.props.reset('new-message');
  }

  handleRemove(id) {
    this.props.removeMessage(id);
  }

  render() {
    return (
      <div>
        <MessagesList
          {...this.props}
          ready={this.props.subscriptionReady('messages')}
          onRemove={this.handleRemove.bind(this)}
        />
        <MessagesEditor
          onSubmit={this.handleSubmit.bind(this)}
        />
        <Errors {...this.props} />
      </div>
    );
  }
}

App.propTypes = {
  subscribe: PropTypes.func.isRequired,
  subscriptionReady: PropTypes.func.isRequired,
  createMessage: PropTypes.func.isRequired,
  removeMessage: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  messages: PropTypes.array.isRequired,
  errors: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    messages: state.mongo.collections.messages || [],
    errors: state.errors,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ createMessage, removeMessage, reset }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionComponent(App));
