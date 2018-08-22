import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { logOut } from '../redux/actions/authenticationActions.js';

const Header = ({ uuid, logOut }) => (
  <div>
    <NavLink to="/dashboard" exact={true}>
      Home
    </NavLink>
    <NavLink to="/favorites" exact={true}>
      Favorites
    </NavLink>

    <h3>Pet Adoption Site Header for user {uuid}</h3>
    <button onClick={() => logOut()}>Logout</button>
  </div>
);

const mapStateToProps = ({ authentication: { isAuthenticated: uuid } }) => ({
  uuid,
});
export default connect(
  mapStateToProps,
  { logOut }
)(Header);
