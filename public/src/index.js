import React ,{ Component } from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import  $ from 'jquery';
import 'bootstrap-loader';
import NotFoundPage from './staticComponents/NotFoundPage.jsx';
import configureStore from './store/configureStore.jsx';
import { syncHistoryWithStore, routerReducer} from 'react-router-redux';
import App from './pages/appIndex.jsx';
import SignIn from './pages/loginContainer.jsx';
import '!style-loader!css-loader!sass-loader!font-awesome/css/font-awesome.css';
import '../styles/css/AdminLTE.css';
import '../styles/css/skins/skin-blue.css';
import Authenticated from './containers/authenticationContainer.jsx';
import AdminDashBoard from './pages/adminDashBoardIndex.jsx';
import setAuthorizationToken from './utils/setAuthorizationToken';

//for React Developer Tools
window.React = React;

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
console.log('localStorage ' , localStorage.jwtToken);
setAuthorizationToken(localStorage.jwtToken);

render(
    <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={SignIn}/>
        <Route path="login" component={SignIn} />
        <Route path="adminDashBoard" component={AdminDashBoard} />
        <Route path="*" component={NotFoundPage}/>
      </Route>  
    </Router>
  </Provider>
  , document.getElementById('body'));
