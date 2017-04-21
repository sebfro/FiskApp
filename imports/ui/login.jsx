import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import {ButtonGroup, Button, DropdownButton, MenuItem, Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';


const wellStyles = {maxWidth: 400, margin: '0 auto 10px', textAlign: 'center'};
const loginBtnStyles = {top: '50%', bsSize: 'large' };
const navBarStyle = {fluid: true, inverse: true, fixedBottom: true};

const buttonsInstance = (
    <div className="well" style={wellStyles} placement>
        <Button bsStyle="primary" style={loginBtnStyles} block >Login</Button>
        <Button style={loginBtnStyles} block>Register</Button>
    </div>
);

const navbarInstance = (
    <Navbar inverse collapseOnSelect>
            <Nav pullRight style={navBarStyle} >
                <NavItem eventKey={1} href="##" style={navBarStyle}>Link Right</NavItem>
                <NavItem eventKey={2} href="#" style={navBarStyle}>Link Right</NavItem>
            </Nav>
    </Navbar>
);

export default class buttons extends React.Component {
    render(){
        return(
            <div>
                {navbarInstance}
            </div>
        )
    }
}