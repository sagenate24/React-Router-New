import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, hashHistory } from 'react-router';

import About from './modules/About';
import Sources from './modules/Sources';

render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/sources" component={Sources}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>
), document.getElementById('app'));

