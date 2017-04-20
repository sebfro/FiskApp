import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import {ButtonGroup, Button, DropdownButton, MenuItem} from 'react-bootstrap';


const names = ["seb", "ben", "fred","seb", "ben", "fred","seb", "ben", "fred","seb", "ben", "fred"];
const listItems = names.map((n) => <Button href="#">{n}</Button>)
const wellStyles = {margin: '0 auto 10px'};


const buttonGroupInstance = (
    <ButtonGroup bsSize="large" justified>
        <Button href="#" bsStyle="primary">Send inn</Button>
        <DropdownButton title="Instillinger" id="instillinger-dropdown" bsStyle="primary">
            <MenuItem eventKey="1" >Profil</MenuItem>
            <MenuItem eventKey="2" >Logg ut</MenuItem>
        </DropdownButton>
    </ButtonGroup>
);



export default class List extends React.Component {


    render(){
        return (
            <div>
                {buttonGroupInstance}
             <ButtonGroup bsSize="large" vertical block>
                 {listItems}
             </ButtonGroup>
            </div>
        );
    }
}

