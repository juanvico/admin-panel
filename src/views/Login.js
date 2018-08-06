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
  Row,
  Alert,
} from 'reactstrap';
import {
  mailPassLogin
} from '../actions/index';
import { connect } from 'react-redux';
import {
  Redirect
} from 'react-router-dom'
const Loader = require('react-spinkit');

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      toHomePage: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const localStorage = window.localStorage;
    if (localStorage.length > 0) {
      const getStoredEmail = localStorage.getItem('email');
      const getStoredPassword = localStorage.getItem('password');
      if (getStoredEmail.length > 0 && getStoredPassword.length > 0) {
        this.loginProxy(getStoredEmail, getStoredPassword);
      }
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  };

  loginProxy = (email, password) => {
    const localStorage = window.localStorage;
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    this.props.login(email, password, (wasUserLogged) => {
      if (wasUserLogged) {
        this.setState({ toHomePage: true })
      }
      else {
        this.setState({ errorMessage: this.props.errorMessage })
      }
    });
  }

  handleSubmit = () => {
    const { email, password } = this.state;
    this.loginProxy(email, password);
  }

  render() {
    const { isLoading, errorMessage } = this.props;
    if (this.state.toHomePage) {
      return <Redirect to='/' />
    }
    return (
      <div className="app flex-row align-items-center">
        {isLoading && <Loader name='double-bounce' />}
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              {errorMessage &&
                <Alert color="danger">
                  {errorMessage}
                </Alert>}
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
              </CardGroup>
            </Col>
          </Row>
        </Container>
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

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password, callback) => dispatch(mailPassLogin(email, password, callback))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
