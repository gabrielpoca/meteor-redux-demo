import { Meteor } from 'meteor/meteor';
import Messages from '../lib/messages';

const createMessage = function(params) {
  if (!params.text)
    throw new Meteor.Error('text missing', 'Cannot submit an empty message');

  Messages.insert(params);
};

const removeMessage = function(_id) {
  if (!_id)
    throw new Meteor.Error('id missing', 'An id is needed to remove a message');

  Messages.remove({ _id });
};

Meteor.methods({
  createMessage,
  removeMessage,
});
