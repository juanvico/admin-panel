import React, { Component } from 'react';

import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'


const profileImg = require('../../assets/img/no-profile-img.png');


class DefaultHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toLoginPage: false
    }
    this.logout = this.logout.bind(this);
  }

  logout = () => {
    const localStorage = window.localStorage;
    localStorage.setItem('email', '');
    localStorage.setItem('password', '');
    this.setState({ toLoginPage: true })
  }
  render() {

    if (this.state.toLoginPage) {
      return <Redirect to='/login' />
    }
    const { user } = this.props;
    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="#/users">Users</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              {user ? user.name : ''}
              <img src={profileImg} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={this.logout} ><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
      </React.Fragment>
    );
  }
}


const mapStateToProps = ({ auth }) => {
  const { user } = auth;
  return {
    user
  }
}

export default connect(mapStateToProps)(DefaultHeader);
