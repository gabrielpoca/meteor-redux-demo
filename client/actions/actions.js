import { Meteor } from 'meteor/meteor';

export const createMessage = params => {
  return dispatch => {
    Meteor.call('createMessage', params, (error) => {
      if (!error) return;

      dispatch({
        type: 'ADD_ERROR',
        error,
      });
    });
  };
};

export const removeMessage = id => {
  return () => {
    Meteor.call('removeMessage', id);
  };
};
