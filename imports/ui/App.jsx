import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import {ButtonGroup, Button, DropdownButton, MenuItem, Navbar, Nav, NavItem, ListGroupItem, ListGroup} from 'react-bootstrap';


const names = ["seb", "ben", "fred","seb", "ben", "fred","seb", "ben", "fred","seb", "ben", "fred"];

function namePressed(){
    alert(' Was pressed');
}


const listItems = names.map((n) => <ListGroupItem onCLick={namePressed} >{n}</ListGroupItem>)
const navBarStyle = {fluid: true, inverse: true, fixedTop: true};

function alertClicked() {
    alert('You clicked the third ListGroupItem');
}

const listgroupInstance = (
    <ListGroup>
        <ListGroupItem href="#link1">Link 1</ListGroupItem>
        <ListGroupItem href="#link2">Link 2</ListGroupItem>
        <ListGroupItem onClick={alertClicked}>
            Trigger an alert
        </ListGroupItem>
    </ListGroup>
);


const navbarInstance = (
    <Navbar inverse collapseOnSelect>
        <Nav pullRight style={navBarStyle} >
            <NavItem eventKey={1} href="#" style={navBarStyle}>Link Right</NavItem>
            <NavItem eventKey={2} href="#" style={navBarStyle}>Link Right</NavItem>
        </Nav>
    </Navbar>
);

    const buttonGroupInstance = (
        <ButtonGroup bsSize="large" justified>
            <Button href="#" bsStyle="primary">Send inn</Button>
            <DropdownButton title="Instillinger" id="instillinger-dropdown" bsStyle="primary" bsSize="large">
                <MenuItem eventKey="1">Profil</MenuItem>
                <MenuItem eventKey="2">
                    Logg ut
                </MenuItem>
            </DropdownButton>
        </ButtonGroup>
    );



export default class List extends React.Component {


    render(){
        return (
            <div>
                {navbarInstance}
             <ListGroup>
                 {listItems}
             </ListGroup>
                {listgroupInstance}
            </div>
        );
    }

}


