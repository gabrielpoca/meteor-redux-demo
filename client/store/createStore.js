import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { connect as connectCollection } from 'meteor-ditto';
import reducers from '../reducers/reducers';
import Messages from '../../lib/messages';

export default () => {
  const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : fn => fn,
  ));

  connectCollection(Messages, store);

  return store;
};
