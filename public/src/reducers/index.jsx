import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import UserReducer from './loginReducer.jsx';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  user : UserReducer,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;