import React, { Component } from 'react';
import {
    CardHeader,
    Card,
    CardBody,
    FormGroup,
    Col,
    Input,
    Row,
    Form,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Button,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import {
    mailPassLogin
} from '../actions/index';
import { connect } from 'react-redux';
import {
    Redirect
} from 'react-router-dom'
const Loader = require('react-spinkit');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <Row className="justify-content-center">
                <Col xs="12" sm="6">
                    <Card>
                        <CardHeader>Busqueda</CardHeader>
                        <CardBody>
                            <Form action="" method="post">
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="text" id="username1" name="username1" placeholder="Username" autoComplete="name" />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="password" id="password1" name="password1" placeholder="Password" autoComplete="current-password" />
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="12">
                                        <InputGroup>
                                            <Input type="email" id="input2-group3" name="input2-group3" placeholder="Buscar datos" />
                                            <InputGroupAddon addonType="append">
                                                <ButtonDropdown isOpen={this.state.second}
                                                    toggle={() => { this.setState({ second: !this.state.second }); }}>
                                                    <DropdownToggle caret color="primary">Por..</DropdownToggle>
                                                    <DropdownMenu className={this.state.second ? 'show' : ''}>
                                                        <DropdownItem>Cédula</DropdownItem>
                                                        <DropdownItem>Numero de contrato</DropdownItem>
                                                        <DropdownItem>Apellido</DropdownItem>
                                                    </DropdownMenu>
                                                </ButtonDropdown>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>


        );
    }
}

export default Home

