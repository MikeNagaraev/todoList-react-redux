import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './components/App.js'
import {Provider} from 'react-redux'
import store from './store'

var Immutable = require("immutable");

var installDevTools = require("immutable-devtools");
installDevTools(Immutable);

ReactDOM.render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}/>
        </Router>
    </Provider>
), document.getElementById('app'));
