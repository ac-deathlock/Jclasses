import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from "../Containers/App";
import App2 from "../Containers/App2";
import App3 from "../Containers/App3";
import DefaultHandler from "../DefaultHandler";

export default (
    <Route path='/' component={DefaultHandler}>
        <IndexRoute component={App} />
        <Route path='home' component={App} />
        <Route path='subjects' component={App2} />
        <Route path='chapters' component={App3} />
        <Route path='*' component={App} />
    </Route>
);