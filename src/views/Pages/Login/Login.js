import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row
} from 'reactstrap';
import { Redirect } from 'react-router-dom'


import {
  mailPassLogin
} from '../../../actions/index';

import { connect } from 'react-redux';



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  };

  handleSubmit = () => {
    const { email, password } = this.state;
    debugger;
    this.props.login(email, password, (wasUserLogged) => {
      if(wasUserLogged)
        this.props.history.push('/dashboard');
    });
  }



  render() {
    const { isLoading } = this.props;
    if (this.state.toHomePage) {
      <Redirect to='/dashboard' />
    }
    return (
      <div className="app flex-row align-items-center">
        <Container>
          {isLoading && <div>Loading .. </div>}
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name='email'
                          onChange={this.handleChange}
                          type="text"
                          placeholder="Email"
                          autoComplete="username"
                          value={this.state.email}
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          name='password'
                          onChange={this.handleChange}
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          value={this.state.password}
                        />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="primary"
                            onClick={this.handleSubmit}
                            className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Button color="primary" className="mt-3" active>Register Now!</Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { isLoading, user } = auth;
  return {
    isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password, callback) => dispatch(mailPassLogin(email, password, callback))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
