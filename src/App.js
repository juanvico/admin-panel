import React, { Component } from 'react';
import routes from './routes';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
        <BrowserRouter>
          <Switch>
            {routes.map((route) => {
              return (<Route
                key={route.path}
                path={route.path}
                render={props=> <route.component {...props} />}
                name={route.name}
                exact={route.exact}
              />)
            })}
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;