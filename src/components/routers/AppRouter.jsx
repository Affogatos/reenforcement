import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import LoginPage from '../LoginPage.jsx';
import HomePage from '../HomePage.jsx';
import Favorites from '../Favorites.jsx';
import NotFoundPage from '../NotFoundPage.jsx';

import UnauthenticatedRoute from './UnauthenticatedRoute.jsx';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';

export const history = createHistory();

export default () => (
  <Router history={history}>
    <div>
      <Switch>
        <UnauthenticatedRoute path="/" component={LoginPage} exact />
        <AuthenticatedRoute path="/dashboard" component={HomePage} exact />
        <AuthenticatedRoute path="/favorites" component={Favorites} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);
