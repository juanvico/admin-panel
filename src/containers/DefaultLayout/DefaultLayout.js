import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import {
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
import { connect } from 'react-redux';

import routes from '../../navigation/routes';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';
const { userBarOptions, NavBar } = require('../../navigation/_nav');
class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goToLogin: false,
      navigation: NavBar
    }
  }

  componentDidMount() {
    const { user } = this.props;
    if (!user) {
      this.setState({ goToLogin: true });
    } else {
      const nav = userBarOptions(user);
      debugger;
      this.setState({
        navigation: nav
      })
    }
  }

  render() {
    const { user } = this.props;
    if (this.state.goToLogin) {
      return <Redirect to='/login' />
    }
    return (
      <div className="app">
        <AppHeader fixed>
          <DefaultHeader {...this.props} />
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <AppSidebarNav navConfig={this.state.navigation} {...this.props} />
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} />
            <Container fluid>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                    <route.component {...props} />
                  )} />)
                    : (null);
                },
                )}
                <Redirect from="/" to="/dashboard" />
              </Switch>
            </Container>
          </main>
        </div>
        <AppFooter>
          <DefaultFooter />
        </AppFooter>
      </div>
    );
  }
}


const mapStateToProps = ({ auth }) => {
  const { isLoading, user, errorMessage } = auth;
  return {
    isLoading,
    user,
    errorMessage
  }
}

export default connect(mapStateToProps)(DefaultLayout);
