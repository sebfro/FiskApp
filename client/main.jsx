import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {Button} from 'react-bootstrap';

import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';


Meteor.startup(() => {
    render(<App />,
    document.getElementById('list'));
});