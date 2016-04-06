import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_MESSAGES':
      return action.messages;
    default:
      return state;
  }
};

const errorsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ERROR':
      return [...state, action.error];
    default:
      return state;
  }
};

export default combineReducers({
  messages: messagesReducer,
  errors: errorsReducer,
  form: formReducer,
});
