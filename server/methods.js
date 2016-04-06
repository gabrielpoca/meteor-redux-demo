import { Meteor } from 'meteor/meteor';
import Messages from '../lib/messages';

const createMessage = function(params) {
  if (!params.text)
    throw new Meteor.Error('text missing', 'Cannot submit an empty message');

  Messages.insert(params);
};

Meteor.methods({
  createMessage,
});
