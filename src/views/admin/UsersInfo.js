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
import { connect } from 'react-redux';
import {
    Redirect
} from 'react-router-dom'

class UsersInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount(){

    }

    render() {
        return <div> informacion de usuarios </div>
    }
}

export default UsersInfo

