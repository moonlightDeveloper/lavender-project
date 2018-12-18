import React from 'react';
import Home from './Home';
import Contact from './Contact';
import {Switch, Route} from 'react-router';

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/contact' component={Contact}/>
    </Switch>
);
export default Main;