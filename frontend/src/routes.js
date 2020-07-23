import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Profile from '../src/pages/Profile';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Profile}/>
            </Switch>
        </BrowserRouter>
    );
}