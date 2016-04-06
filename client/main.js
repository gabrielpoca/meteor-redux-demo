import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import createStore from './store/createStore';
import App from './containers/App';

Meteor.startup(() => {
  render((
    <Provider store={createStore()}>
      <Router history={browserHistory}>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  ), document.getElementById('app'));
});
