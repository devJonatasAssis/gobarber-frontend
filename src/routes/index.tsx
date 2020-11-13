import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import Signup from '../pages/Signup';
import Route from './Route';

const Routes: React.FC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} isPrivate />
        </Switch>
    </BrowserRouter>
);

export default Routes;
