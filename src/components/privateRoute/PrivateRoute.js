import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute({ isLoggedIn, component: Component, ...rest }) {
  return <Route {...rest} render={props => (isLoggedIn ? <Component {...props} /> : <Redirect to="/" />)} />;
}

export default connect(({ authReducer }) => ({
  isLoggedIn: authReducer.isLoggedIn
}))(PrivateRoute);
