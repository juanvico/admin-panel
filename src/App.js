import React, { Component } from 'react';
import { Login } from './views';
import DefaultLayout from './containers/DefaultLayout';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.css'
const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <HashRouter>
          <Switch>
            <Route exact path="/login" name="Login Page" component={Login} />
            <Route path="/" name="Dashboard" component={DefaultLayout} />
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
  fsadfsd
  fsdf
  sdf
  asdf
  asdfdfsadf
  asdfsf
  
}

export default App;