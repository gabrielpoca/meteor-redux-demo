import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';

const fields = ['text'];

class MessagesEditor extends Component {
  render() {
    const { fields: { text }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <input {...text} />
        <button type="submit">Create</button>
      </form>
    );
  }
}

MessagesEditor.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  fields,
  form: 'new-message',
})(MessagesEditor);
