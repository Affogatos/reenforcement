import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Header from '../Header.jsx';

const AuthenticatedRoute = ({ isAuthenticated, component: Component, ...rest }) => (
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        <div>
          <Header />
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = ({ authentication }) => ({
  isAuthenticated: !!authentication.isAuthenticated,
});

export default connect(mapStateToProps)(AuthenticatedRoute);
