import React, { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row,
    Label
} from 'reactstrap';
import { connect } from 'react-redux';

class RegisterUser extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Row>
                <Col xs="12" >
                    <Card>
                        <CardHeader>
                            Example Form
                         </CardHeader>
                        <CardBody>
                            <Form action="" method="post">
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>Username</InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="email" id="username3" name="username3" autoComplete="name" />
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText><i className="fa fa-user"></i></InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>Email</InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="email" id="email3" name="email3" autoComplete="username" />
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText><i className="fa fa-envelope"></i></InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>Password</InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="password" id="password3" name="password3" autoComplete="current-password" />
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>Password</InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="password" id="password3" name="password3" autoComplete="current-password" />
                                        <InputGroupAddon addonType="append">
                                            <InputGroupText><i className="fa fa-asterisk"></i></InputGroupText>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="3">
                                        <Label>Inline Radios</Label>
                                    </Col>
                                    <Col md="9">
                                        <FormGroup check inline>
                                            <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
                                            <Label className="form-check-label" check htmlFor="inline-radio1">One</Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2" />
                                            <Label className="form-check-label" check htmlFor="inline-radio2">Two</Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <Input className="form-check-input" type="radio" id="inline-radio3" name="inline-radios" value="option3" />
                                            <Label className="form-check-label" check htmlFor="inline-radio3">Three</Label>
                                        </FormGroup>
                                    </Col>
                                </FormGroup>
                                <FormGroup className="form-actions">
                                    <Button type="submit" size="sm" color="primary">Submit</Button>
                                </FormGroup>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        );
    }
}


export default (RegisterUser);


