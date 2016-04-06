import { Meteor } from 'meteor/meteor';
import Messages from '../lib/messages';

Meteor.publish('messages', function() {
  return Messages.find({});
});
