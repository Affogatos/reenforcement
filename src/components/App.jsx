import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import AppRouter, { history } from './routers/AppRouter.jsx';
import { logIn } from '../redux/actions/authenticationActions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.logIn();
    }
  }
  render() {
    return (
      <div>
        <AppRouter />
      </div>
    );
  }
}

const mapStateToProps = ({ authentication: { isAuthenticated } }) => ({ isAuthenticated });
export default connect(
  null,
  { logIn }
)(App);
