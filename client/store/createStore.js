import { Tracker } from 'meteor/tracker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers/reducers';
import Messages from '../../lib/messages';

export default () => {
  const store = createStore(reducers, applyMiddleware(thunk));

  Tracker.autorun(() => {
    store.dispatch({
      type: 'SET_MESSAGES',
      messages: Messages.find().fetch(),
    });
  });

  return store;
};
